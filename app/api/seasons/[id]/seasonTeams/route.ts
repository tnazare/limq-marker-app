import { createSeasonTeamRequestHandler } from '@/features/seasonTeams/restRequestHandlers/createSeasonTeamRequestHandler'
import { getListOfSeasonTeamsRequestHandler } from '@/features/seasonTeams/restRequestHandlers/getListOfSeasonTeamRequestHandler'

export {
    getListOfSeasonTeamsRequestHandler as GET,
    createSeasonTeamRequestHandler as POST
}
