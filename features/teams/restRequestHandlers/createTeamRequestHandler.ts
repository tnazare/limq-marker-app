import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {teamSelector} from "@/features/teams/prismaSelectors/teamSelector";
import {teamDetailsResponse} from "@/features/teams/restResponses/teamDetailsResponse";
import {TeamCreateInputObjectSchema} from "@/prisma/generated/schemas/objects/TeamCreateInput.schema";
import type {Prisma} from "@prisma/client";
import type {NextRequest} from "next/server";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const createTeamRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<undefined, Prisma.TeamCreateInput> = {
  onValidateRequestAsync: async (req: NextRequest) => {
    const requestBody = await req.json();
    const validation = TeamCreateInputObjectSchema.safeParse(requestBody);
    if (!validation.success) {
      const {errors} = validation.error;
      return {success: false, issues: errors};
    }
    return {success: true, validatedRequestBody: validation.data};

  },
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.validatedRequestBody) {
      const createArgs: Prisma.TeamCreateArgs = {
        data: details.validatedRequestBody,
        select: teamSelector
      };

      const team = await prismaClient.team.create(createArgs);

      return teamDetailsResponse(team);
    }
    throw new Error("Validated request body is undefined");

  },
};
export const createTeamRequestHandler = restRequestHandlerBuilder(createTeamRequestHandlerBuilderOptions);
