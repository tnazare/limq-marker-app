import { prismaClient } from "@/features/common/prisma/prismaClient";
import { restRequestHandlerBuilder } from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import { seasonTeamSelector } from "@/features/seasonTeams/prismaSelectors/seasonTeamSelector";
import type { NextRequest } from "next/server";
import type { RestRequestHandlerBuilderOptions } from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import { seasonTeamsListResponse } from "@/features/seasonTeams/restResponses/listOfSeasonTeamsResponse";
import { SeasonIdParams } from "@/features/common/params/seasonIdParams";
import { seasonIdParameterValidator } from "@/features/common/paramValidators/seasonIdParameterValidator";
import { notFoundErrorResponse } from "@/features/common/restResponses/notFoundErrorResponse";

const getListOfSeasonTeamsRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<SeasonIdParams, undefined> = {
  onValidateParams: seasonIdParameterValidator,
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.params) {
      const { params } = details.params;
      const { seasonId } = params;
      const seasonTeams = await prismaClient.seasonTeam.findMany({
        select: seasonTeamSelector,
        where: {
          seasonId: seasonId
        }
      });
      if (seasonTeams) {
        return seasonTeamsListResponse(seasonTeams);
      }
      return notFoundErrorResponse();
    }
    throw new Error("Params were not defined");
  }
}
export const getListOfSeasonTeamsRequestHandler = restRequestHandlerBuilder(getListOfSeasonTeamsRequestHandlerBuilderOptions);