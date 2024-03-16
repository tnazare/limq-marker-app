import {idParameterValidator} from "@/features/common/paramValidators/idParameterValidator";
import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {notFoundErrorResponse} from "@/features/common/restResponses/notFoundErrorResponse";
import {musicianSelector} from "@/features/musicians/prismaSelectors/musicianSelector";
import {musicianDetailsResponse} from "@/features/musicians/restResponses/musicianDetailsResponse";
import type {NextRequest} from "next/server";
import type {IdParams} from "@/features/common/params/idParams";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const getMusicianDetailsRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<IdParams, undefined> = {
  onValidateParams: idParameterValidator,
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.params) {
      const {params} = details.params;
      const {id} = params;
      const musician = await prismaClient.musician.findUnique({where: {id}, select: musicianSelector});
      if (musician) {
        return musicianDetailsResponse(musician);
      }
      return notFoundErrorResponse();
    }
    throw new Error("Params were not defined");

  },
};
export const getMusicianDetailsRequestHandler = restRequestHandlerBuilder(getMusicianDetailsRequestHandlerBuilderOptions);
