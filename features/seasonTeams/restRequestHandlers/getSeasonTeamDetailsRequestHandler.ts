import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {notFoundErrorResponse} from "@/features/common/restResponses/notFoundErrorResponse";
import type {NextRequest} from "next/server";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {SeasonTeamIdParams} from "@/features/common/params/seasonTeamIdParams";
import {seasonTeamIdParameterValidator} from "@/features/common/paramValidators/seasonTeamIdParameterValidator";
import {seasonTeamSelector} from "@/features/seasonTeams/prismaSelectors/seasonTeamSelector";
import {seasonTeamDetailsResponse} from "@/features/seasonTeams/restResponses/seasonTeamDetailsResponse";

const getSeasonTeamDetailsRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<SeasonTeamIdParams, undefined> = {
  onValidateParams: seasonTeamIdParameterValidator,
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.params) {
      const {params} = details.params;
      const {id, seasonTeamId} = params;
      const seasonTeam = await prismaClient.seasonTeam.findFirst({where: {id: seasonTeamId, seasonId:id}, select: seasonTeamSelector});
      if (seasonTeam) {
        return seasonTeamDetailsResponse(seasonTeam);
      }
      return notFoundErrorResponse();
    }
    throw new Error("Params were not defined");
  },
};
export const getSeasonTeamDetailsRequestHandler = restRequestHandlerBuilder(getSeasonTeamDetailsRequestHandlerBuilderOptions);
