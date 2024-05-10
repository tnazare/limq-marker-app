import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {musicianSelector} from "@/features/musicians/prismaSelectors/musicianSelector";
import {musicianDetailsResponse} from "@/features/musicians/restResponses/musicianDetailsResponse";
import {PersonCreateInputObjectSchema} from "@/prisma/generated/schemas/objects/PersonCreateInput.schema";
import type {Prisma} from "@prisma/client";
import type {NextRequest} from "next/server";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const createMusicianRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<undefined, Prisma.PersonCreateInput> = {
  onValidateRequestAsync: async (req: NextRequest) => {
    const requestBody = await req.json();
    const validation = PersonCreateInputObjectSchema.safeParse(requestBody);
    if (!validation.success) {
      const {errors} = validation.error;
      return {success: false, issues: errors};
    }
    return {success: true, validatedRequestBody: validation.data};

  },
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.validatedRequestBody) {
      const createArgs: Prisma.PersonCreateArgs = {
        data: details.validatedRequestBody,
        select: musicianSelector
      };

      const musician = await prismaClient.person.create(createArgs);

      return musicianDetailsResponse(musician);
    }
    throw new Error("Validated request body is undefined");

  },
};
export const createMusicianRequestHandler = restRequestHandlerBuilder(createMusicianRequestHandlerBuilderOptions);
