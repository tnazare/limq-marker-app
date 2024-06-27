import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {SeasonTeamUpdateInputObjectSchema} from "@/prisma/generated/schemas";
import type {Prisma} from "@prisma/client";
import type {NextRequest} from "next/server";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {SeasonTeamIdParams} from "@/features/common/params/seasonTeamIdParams";
import {seasonTeamIdParameterValidator} from "@/features/common/paramValidators/seasonTeamIdParameterValidator";
import {seasonTeamSelector} from "@/features/seasonTeams/prismaSelectors/seasonTeamSelector";
import {seasonTeamDetailsResponse} from "@/features/seasonTeams/restResponses/seasonTeamDetailsResponse";

const updateSeasonRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<SeasonTeamIdParams, Prisma.SeasonUpdateInput> = {
  onValidateParams: seasonTeamIdParameterValidator,
  onValidateRequestAsync: async (req: NextRequest) => {
    const requestBody = await req.json();
    const validation = SeasonTeamUpdateInputObjectSchema.safeParse(requestBody);
    if (!validation.success) {
      const {errors} = validation.error;
      return {success: false, issues: errors};
    }
    return {success: true, validatedRequestBody: validation.data};

  },
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.params && details.validatedRequestBody) {
      const {seasonTeamId} = details.params.params;
      const updateArgs: Prisma.SeasonTeamUpdateArgs = {
        where: {id: seasonTeamId},
        data: details.validatedRequestBody,
        select: seasonTeamSelector
      };
      const seasonTeam = await prismaClient.seasonTeam.update(updateArgs);
      return seasonTeamDetailsResponse(seasonTeam);
    }
    throw new Error("Validated request body is undefined, or params are undefined.");
  }
}
export const updateSeasonTeamRequestHandler = restRequestHandlerBuilder(updateSeasonRequestHandlerBuilderOptions);
