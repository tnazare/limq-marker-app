import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {seasonTeamSelector} from "@/features/seasonTeams/prismaSelectors/seasonTeamSelector";
import {SeasonTeamCreateInputObjectSchema} from "@/prisma/generated/schemas/objects/SeasonTeamCreateInput.schema";
import type {Prisma} from "@prisma/client";
import type {NextRequest} from "next/server";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import { seasonTeamDetailsResponse } from "@/features/seasonTeams/restResponses/seasonTeamDetailsResponse";
import { seasonIdParameterValidator } from "@/features/common/paramValidators/seasonIdParameterValidator";
import { SeasonIdParams } from "@/features/common/params/seasonIdParams";

const createSeasonTeamRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<SeasonIdParams, Prisma.SeasonTeamCreateInput> = {
    onValidateParams: seasonIdParameterValidator,
    onValidateRequestAsync: async (req: NextRequest) => {
    const requestBody = await req.json();
    const validation = SeasonTeamCreateInputObjectSchema.safeParse(requestBody);
    if (!validation.success) {
      const {errors} = validation.error;
      return {success: false, issues: errors};
    }
    return {success: true, validatedRequestBody: validation.data};
  },
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.validatedRequestBody) {
      const createArgs: Prisma.SeasonTeamCreateArgs = {
        data: details.validatedRequestBody,
        select: seasonTeamSelector
      };

      const seasonTeam = await prismaClient.seasonTeam.create(createArgs);

      return seasonTeamDetailsResponse(seasonTeam);
    }
    throw new Error("Validated request body is undefined");

  },
};
export const createSeasonTeamRequestHandler = restRequestHandlerBuilder(createSeasonTeamRequestHandlerBuilderOptions);
