import { prismaClient } from "@/features/common/prisma/prismaClient";
import { restRequestHandlerBuilder } from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import { musicianSelector } from "@/features/musicians/prismaSelectors/musicianSelector";
import { musiciansListResponse } from "@/features/musicians/restResponses/listOfMusiciansResponse";
import type { NextRequest } from "next/server";
import type { RestRequestHandlerBuilderOptions } from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const getListOfMusiciansRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<undefined, undefined> = {
  onValidRequestAsync: async (req: NextRequest) => {
    const musicians = await prismaClient.musician.findMany({ select: musicianSelector });
    return musiciansListResponse(musicians);
  }
}
export const getListOfMusiciansRequestHandler = restRequestHandlerBuilder(getListOfMusiciansRequestHandlerBuilderOptions);
