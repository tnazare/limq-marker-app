import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {musicianSelector} from "@/features/musicians/prismaSelectors/musicianSelector";
import {musiciansListResponse} from "@/features/musicians/restResponses/listOfMusiciansResponse";
import {PersonTypeSchema} from "@/prisma/generated/schemas";
import type {NextRequest} from "next/server";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const getListOfMusiciansRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<undefined, undefined> = {
  onValidRequestAsync: async (req: NextRequest) => {
    const musicians = await prismaClient.person.findMany({
      select: musicianSelector,
      where: {
        type: PersonTypeSchema.enum.MUSICIAN
      }
    });
    return musiciansListResponse(musicians);
  }
}
export const getListOfMusiciansRequestHandler = restRequestHandlerBuilder(getListOfMusiciansRequestHandlerBuilderOptions);
