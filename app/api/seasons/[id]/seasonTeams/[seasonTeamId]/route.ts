import {deleteSeasonTeamRequestHandler} from "@/features/seasonTeams/restRequestHandlers/deleteSeasonTeamRequestHandler";
import {getSeasonTeamDetailsRequestHandler} from "@/features/seasonTeams/restRequestHandlers/getSeasonTeamDetailsRequestHandler";
import {updateSeasonTeamRequestHandler} from "@/features/seasonTeams/restRequestHandlers/updateSeasonTeamRequestHandler";

export {
    deleteSeasonTeamRequestHandler as DELETE,
    getSeasonTeamDetailsRequestHandler as GET,
    updateSeasonTeamRequestHandler as PUT
}