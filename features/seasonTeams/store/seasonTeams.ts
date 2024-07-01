import {api} from '@/features/common/store/api'
import type {Prisma} from '@prisma/client'
import {SeasonTeamsListResponseModel} from "@/features/seasonTeams/restResponseModels/seasonTeamsListResponseModel";
import {SeasonTeamDetailsResponseModel} from "@/features/seasonTeams/restResponseModels/seasonTeamDetailsResponseModel";

type SeasonTeamIdAndSeasonId = {
  seasonTeamId: string,
  seasonId: string,
}
type SeasonTeamCreateInputWithSeasonId = Prisma.SeasonTeamCreateInput & {
  seasonId: string
}
export const seasonTeamsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSeasonTeams: builder.query<SeasonTeamsListResponseModel, string>({
      query: (id) => `seasons/${id}/seasonTeams`,
    }),
    createSeasonTeam: builder.mutation<SeasonTeamDetailsResponseModel, SeasonTeamCreateInputWithSeasonId>({
          query: (data) => {
            const {seasonId} = data;
            const dataToPost: Prisma.SeasonTeamCreateInput = {
              color: data.color,
              name: data.name,
            }
            return {
              url: `seasons/${seasonId}/seasonTeams`,
              method: 'POST',
              body: dataToPost
            }
          }
        }
    ),
    deleteSeasonTeam: builder.mutation<undefined, SeasonTeamIdAndSeasonId>({
      query: (data) => ({
        url: `seasons/${data.seasonId}/seasonTeams{${data.seasonTeamId}`,
        method: 'DELETE'
      })
    })
  }),
})
export const {
  useGetSeasonTeamsQuery,
    useCreateSeasonTeamMutation,
    useDeleteSeasonTeamMutation,
} = seasonTeamsApi
export const {
  endpoints: {
    getSeasonTeams,
      createSeasonTeam,
    deleteSeasonTeam
  }
} = seasonTeamsApi
