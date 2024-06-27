import {idParameterValidator} from "@/features/common/paramValidators/idParameterValidator";
import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {notFoundErrorResponse} from "@/features/common/restResponses/notFoundErrorResponse";
import {noContentResponse} from "../../common/restResponses/noContentResponse";
import type {NextRequest} from "next/server";
import type {IdParams} from "@/features/common/params/idParams";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const deleteSeasonRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<IdParams, undefined> = {
  onValidateParams: idParameterValidator,
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.params) {
      const {params} = details.params;
      const {id} = params;
      const season = await prismaClient.season.findFirst({where: {id}})
      if (!season) {
        return notFoundErrorResponse();
      }
      await prismaClient.season.delete({where: {id}});
      return noContentResponse();
    }
    throw new Error("Params were not defined");

  }
};
export const deleteSeasonRequestHandler = restRequestHandlerBuilder(deleteSeasonRequestHandlerBuilderOptions);
