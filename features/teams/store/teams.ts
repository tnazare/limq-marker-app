import {api} from '@/features/common/store/api'
import type {Prisma} from '@prisma/client'
import type {TeamDetailsResponseModel} from "@/features/teams/restResponseModels/teamDetailsResponseModel";
import type {TeamsListResponseModel} from "@/features/teams/restResponseModels/teamsListResponseModel";

type TeamUpdateInputWithId = Prisma.TeamUpdateInput & {
  id: string
}
export const teamsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTeams: builder.query<TeamsListResponseModel, void>({
      query: () => 'teams',
    }),
    getTeam: builder.query<TeamDetailsResponseModel, string>({
      query: (id) => `teams/${id}`,
    }),
    createTeam: builder.mutation<TeamDetailsResponseModel, Prisma.TeamCreateInput>({
      query: ({name, color, members}) => ({
        url: 'teams',
        method: 'POST',
        body: {
          name,
          color,
          members
        }
      })
    }),
    updateTeam: builder.mutation<TeamDetailsResponseModel, TeamUpdateInputWithId>({
      query: (data) => {
        const {id} = data;
        const dataToPut: Prisma.TeamUpdateInput = {
          name: data.name,
          color: data.color,
          members: data.members
        }
        return {
          url: `teams/${id}`,
          method: 'PUT',
          body: dataToPut
        }
      }
    }),
    deleteTeam: builder.mutation<undefined, String>({
      query: (id) => ({
        url: `teams/${id}`,
        method: 'DELETE'
      })
    })
  }),
})
export const {
  useGetTeamsQuery,
  useGetTeamQuery,
  useCreateTeamMutation,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
} = teamsApi
export const {
  endpoints: {
    getTeams,
    getTeam,
    createTeam,
    updateTeam,
    deleteTeam
  }
} = teamsApi
