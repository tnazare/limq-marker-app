import {prismaClient} from "@/features/common/prisma/prismaClient";
import {restRequestHandlerBuilder} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import {teamSelector} from "@/features/teams/prismaSelectors/teamSelector";
import {teamsListResponse} from "@/features/teams/restResponses/listOfTeamsResponse";
import type {NextRequest} from "next/server";
import type {RestRequestHandlerBuilderOptions} from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const getListOfTeamsRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<undefined, undefined> = {
  onValidRequestAsync: async (req: NextRequest) => {
    const teams = await prismaClient.team.findMany({select: teamSelector});
    return teamsListResponse(teams);
  }
}
export const getListOfTeamsRequestHandler = restRequestHandlerBuilder(getListOfTeamsRequestHandlerBuilderOptions);
