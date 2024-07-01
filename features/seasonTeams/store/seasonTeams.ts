import {api} from '@/features/common/store/api'
import type {Prisma} from '@prisma/client'
import {SeasonTeamsListResponseModel} from "@/features/seasonTeams/restResponseModels/seasonTeamsListResponseModel";

type SeasonTeamIdAndSeasonId = {
    seasonTeamId: string,
    seasonId: string,
}
export const seasonTeamsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getSeasonTeams: builder.query<SeasonTeamsListResponseModel, string>({
            query: (id) => `seasons/${id}/seasonTeams`,
        }),
        deleteSeasonTeam: builder.mutation<undefined, SeasonTeamIdAndSeasonId>({
            query: (params) => ({
                url: `seasons/${params.seasonId}/seasonTeams{${params.seasonTeamId}`,
                method: 'DELETE'
            })
        })
    }),
})
export const {
    useGetSeasonTeamsQuery,
    useDeleteSeasonTeamMutation,
} = seasonTeamsApi
export const {
    endpoints: {
        getSeasonTeams,
        deleteSeasonTeam
    }
} = seasonTeamsApi
