import {idParameterValidator} from "@/features/common/paramValidators/idParameterValidator";
import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {musicianSelector} from "@/features/musicians/prismaSelectors/musicianSelector";
import {MusicianUpdateInputObjectSchema} from "@/prisma/generated/schemas/objects/MusicianUpdateInput.schema";
import {musicianDetailsResponse} from "../restResponses/musicianDetailsResponse";
import type {Prisma} from "@prisma/client";
import type {NextRequest} from "next/server";
import type {IdParams} from "@/features/common/params/idParams";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const updateMusicianRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<IdParams, Prisma.MusicianUpdateInput> = {
  onValidateParams: idParameterValidator,
  onValidateRequestAsync: async (req: NextRequest) => {
    const requestBody = await req.json();
    const validation = MusicianUpdateInputObjectSchema.safeParse(requestBody);
    if (!validation.success) {
      const {errors} = validation.error;
      return {success: false, issues: errors};
    }
    return {success: true, validatedRequestBody: validation.data};

  },
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.params && details.validatedRequestBody) {
      const {id} = details.params.params;
      const updateArgs: Prisma.MusicianUpdateArgs = {
        where: {id},
        data: details.validatedRequestBody,
        select: musicianSelector
      };
      const musician = await prismaClient.musician.update(updateArgs);
      return musicianDetailsResponse(musician);
    }
    throw new Error("Validated request body is undefined, or params are undefined.");
  }
}
export const updateMusicianRequestHandler = restRequestHandlerBuilder(updateMusicianRequestHandlerBuilderOptions);
