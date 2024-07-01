import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {seasonTeamSelector} from "@/features/seasonTeams/prismaSelectors/seasonTeamSelector";
import type {NextRequest} from "next/server";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {seasonTeamsListResponse} from "@/features/seasonTeams/restResponses/listOfSeasonTeamsResponse";
import {notFoundErrorResponse} from "@/features/common/restResponses/notFoundErrorResponse";
import {IdParams} from "@/features/common/params/idParams";
import {idParameterValidator} from "@/features/common/paramValidators/idParameterValidator";

const getListOfSeasonTeamsRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<IdParams, undefined> = {
  onValidateParams: idParameterValidator,
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.params) {
      const {params} = details.params;
      const {id} = params;
      const seasonTeams = await prismaClient.seasonTeam.findMany({
        select: seasonTeamSelector,
        where: {
          seasonId: id
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