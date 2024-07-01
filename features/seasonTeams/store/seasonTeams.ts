import {api} from '@/features/common/store/api'
import type {Prisma} from '@prisma/client'
import {SeasonTeamsListResponseModel} from "@/features/seasonTeams/restResponseModels/seasonTeamsListResponseModel";

export const seasonTeamsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getSeasonTeams: builder.query<SeasonTeamsListResponseModel, string>({
            query: (id) => `seasons/${id}/seasonTeams`,
        })
    }),
})
export const {
    useGetSeasonTeamsQuery
} = seasonTeamsApi
export const {
    endpoints: {
        getSeasonTeams
    }
} = seasonTeamsApi
