import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {seasonSelector} from "@/features/seasons/prismaSelectors/seasonSelector";
import {seasonDetailsResponse} from "@/features/seasons/restResponses/seasonDetailsResponse";
import {SeasonCreateInputObjectSchema} from "@/prisma/generated/schemas";
import type {Prisma} from "@prisma/client";
import type {NextRequest} from "next/server";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const createSeasonRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<undefined, Prisma.SeasonCreateInput> = {
  onValidateRequestAsync: async (req: NextRequest) => {
    const requestBody = await req.json();
    const validation = SeasonCreateInputObjectSchema.safeParse(requestBody);
    if (!validation.success) {
      const {errors} = validation.error;
      return {success: false, issues: errors};
    }
    return {success: true, validatedRequestBody: validation.data};

  },
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.validatedRequestBody) {
      const createArgs: Prisma.SeasonCreateArgs = {
        data: details.validatedRequestBody,
        select: seasonSelector
      };

      const season = await prismaClient.season.create(createArgs);

      return seasonDetailsResponse(season);
    }
    throw new Error("Validated request body is undefined");

  },
};
export const createSeasonRequestHandler = restRequestHandlerBuilder(createSeasonRequestHandlerBuilderOptions);
