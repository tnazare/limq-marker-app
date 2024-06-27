import {idParameterValidator} from "@/features/common/paramValidators/idParameterValidator";
import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {notFoundErrorResponse} from "@/features/common/restResponses/notFoundErrorResponse";
import {seasonSelector} from "@/features/seasons/prismaSelectors/seasonSelector";
import {seasonDetailsResponse} from "@/features/seasons/restResponses/seasonDetailsResponse";
import type {NextRequest} from "next/server";
import type {IdParams} from "@/features/common/params/idParams";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const getSeasonDetailsRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<IdParams, undefined> = {
  onValidateParams: idParameterValidator,
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.params) {
      const {params} = details.params;
      const {id} = params;
      const season = await prismaClient.season.findUnique({where: {id}, select: seasonSelector});
      if (season) {
        return seasonDetailsResponse(season);
      }
      return notFoundErrorResponse();
    }
    throw new Error("Params were not defined");

  },
};
export const getSeasonDetailsRequestHandler = restRequestHandlerBuilder(getSeasonDetailsRequestHandlerBuilderOptions);
