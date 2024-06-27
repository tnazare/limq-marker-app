import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {seasonSelector} from "@/features/seasons/prismaSelectors/seasonSelector";
import {seasonsListResponse} from "@/features/seasons/restResponses/listOfSeasonsResponse";
import type {NextRequest} from "next/server";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const getListOfSeasonsRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<undefined, undefined> = {
  onValidRequestAsync: async (req: NextRequest) => {
    const seasons = await prismaClient.season.findMany({
      select: seasonSelector
    });
    return seasonsListResponse(seasons);
  }
}
export const getListOfSeasonsRequestHandler = restRequestHandlerBuilder(getListOfSeasonsRequestHandlerBuilderOptions);
