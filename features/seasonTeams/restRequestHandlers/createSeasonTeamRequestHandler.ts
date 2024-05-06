import { seasonIdParameterValidator } from "@/features/common/paramValidators/seasonIdParameterValidator";
import { SeasonIdParams } from "@/features/common/params/seasonIdParams";
import { prismaClient } from "@/features/common/prisma/prismaClient";
import type { RestRequestHandlerBuilderOptions } from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import { restRequestHandlerBuilder } from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import { seasonTeamSelector } from "@/features/seasonTeams/prismaSelectors/seasonTeamSelector";
import { seasonTeamDetailsResponse } from "@/features/seasonTeams/restResponses/seasonTeamDetailsResponse";
import { SeasonTeamCreateInputObjectSchema } from "@/prisma/generated/schemas/objects/SeasonTeamCreateInput.schema";
import type { Prisma } from "@prisma/client";
import type { NextRequest } from "next/server";

const createSeasonTeamRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<SeasonIdParams, Prisma.SeasonTeamCreateInput> = {
    onValidateParams: seasonIdParameterValidator,
    onValidateRequestAsync: async (req: NextRequest) => {
        const requestBody = await req.json();
        const validation = SeasonTeamCreateInputObjectSchema.safeParse(requestBody);
        if (!validation.success) {
            const { errors } = validation.error;
            return { success: false, issues: errors };
        }
        return { success: true, validatedRequestBody: validation.data };
    },
    onValidRequestAsync: async (req: NextRequest, details) => {
        if (details && details.params && details.validatedRequestBody) {
            const createArgs: Prisma.SeasonTeamCreateArgs = {
                data: details.validatedRequestBody,
                select: seasonTeamSelector
            };
            const seasonTeam = await prismaClient.seasonTeam.create(createArgs);
            const { params } = details.params;
            const { seasonId } = params;
            const seasonUpdateArgs: Prisma.SeasonUpdateArgs = {
                where: {
                    id: seasonId
                }, data: {
                    teams: {
                        create: [details.validatedRequestBody]
                    }
                },
                select: {
                    teams: { select: seasonTeamSelector }
                }
            }
            await prismaClient.season.update(seasonUpdateArgs)

            return seasonTeamDetailsResponse(seasonTeam);
        }
        throw new Error("Validated request param or body is undefined");

    },
};
export const createSeasonTeamRequestHandler = restRequestHandlerBuilder(createSeasonTeamRequestHandlerBuilderOptions);
