import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {musicianSelector} from "@/features/musicians/prismaSelectors/musicianSelector";
import {musicianDetailsResponse} from "@/features/musicians/restResponses/musicianDetailsResponse";
import {MusicianCreateInputObjectSchema} from "@/prisma/generated/schemas/objects/MusicianCreateInput.schema";
import type {Prisma} from "@prisma/client";
import type {NextRequest} from "next/server";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const createMusicianRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<undefined, Prisma.MusicianCreateInput> = {
  onValidateRequestAsync: async (req: NextRequest) => {
    const requestBody = await req.json();
    const validation = MusicianCreateInputObjectSchema.safeParse(requestBody);
    if (!validation.success) {
      const {errors} = validation.error;
      return {success: false, issues: errors};
    }
    return {success: true, validatedRequestBody: validation.data};

  },
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.validatedRequestBody) {
      const createArgs: Prisma.MusicianCreateArgs = {
        data: details.validatedRequestBody,
        select: musicianSelector
      };

      const musician = await prismaClient.musician.create(createArgs);

      return musicianDetailsResponse(musician);
    }
    throw new Error("Validated request body is undefined");

  },
};
export const createMusicianRequestHandler = restRequestHandlerBuilder(createMusicianRequestHandlerBuilderOptions);
