import {idParameterValidator} from "@/features/common/paramValidators/idParameterValidator";
import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {seasonSelector} from "@/features/seasons/prismaSelectors/seasonSelector";
import {SeasonUpdateInputObjectSchema} from "@/prisma/generated/schemas";
import {seasonDetailsResponse} from "../restResponses/seasonDetailsResponse";
import type {Prisma} from "@prisma/client";
import type {NextRequest} from "next/server";
import type {IdParams} from "@/features/common/params/idParams";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const updateSeasonRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<IdParams, Prisma.SeasonUpdateInput> = {
  onValidateParams: idParameterValidator,
  onValidateRequestAsync: async (req: NextRequest) => {
    const requestBody = await req.json();
    const validation = SeasonUpdateInputObjectSchema.safeParse(requestBody);
    if (!validation.success) {
      const {errors} = validation.error;
      return {success: false, issues: errors};
    }
    return {success: true, validatedRequestBody: validation.data};

  },
  onValidRequestAsync: async (req: NextRequest, details) => {
    if (details && details.params && details.validatedRequestBody) {
      const {id} = details.params.params;
      const updateArgs: Prisma.SeasonUpdateArgs = {
        where: {id},
        data: details.validatedRequestBody,
        select: seasonSelector
      };
      const season = await prismaClient.season.update(updateArgs);
      return seasonDetailsResponse(season);
    }
    throw new Error("Validated request body is undefined, or params are undefined.");
  }
}
export const updateSeasonRequestHandler = restRequestHandlerBuilder(updateSeasonRequestHandlerBuilderOptions);
