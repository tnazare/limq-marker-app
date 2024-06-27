import {idParameterValidator} from "@/features/common/paramValidators/idParameterValidator";
import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {notFoundErrorResponse} from "@/features/common/restResponses/notFoundErrorResponse";
import {noContentResponse} from "../../common/restResponses/noContentResponse";
import type {NextRequest} from "next/server";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {SeasonTeamIdParams} from "@/features/common/params/seasonTeamIdParams";
import {seasonTeamIdParameterValidator} from "@/features/common/paramValidators/seasonTeamIdParameterValidator";

const deleteSeasonTeamRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<SeasonTeamIdParams, undefined> = {
  onValidateParams: seasonTeamIdParameterValidator,
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.params) {
      const {params} = details.params;
      const {id,seasonTeamId} = params;
      const seasonTeam = await prismaClient.seasonTeam.findFirst({where: {id: seasonTeamId, seasonId: id}})
      if (!seasonTeam) {
        return notFoundErrorResponse();
      }
      await prismaClient.seasonTeam.delete({where: {id:seasonTeamId}});
      return noContentResponse();
    }
    throw new Error("Params were not defined");

  }
};
export const deleteSeasonTeamRequestHandler = restRequestHandlerBuilder(deleteSeasonTeamRequestHandlerBuilderOptions);
