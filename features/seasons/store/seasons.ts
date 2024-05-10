import {api} from '@/features/common/store/api'
import type {Prisma} from '@prisma/client'
import type {SeasonDetailsResponseModel} from '@/features/seasons/restResponseModels/seasonDetailsResponseModel'
import type {SeasonsListResponseModel} from '@/features/seasons/restResponseModels/seasonsListResponseModel'

type SeasonUpdateInputWithId = Prisma.SeasonUpdateInput & {
  id: string
}
export const seasonsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSeasons: builder.query<SeasonsListResponseModel, void>({
      query: () => 'seasons',
    }),
    getSeason: builder.query<SeasonDetailsResponseModel, string>({
      query: (id) => `seasons/${id}`,
    }),
    createSeason: builder.mutation<SeasonDetailsResponseModel, Prisma.SeasonCreateInput>({
      query: ({label, startDate}) => ({
        url: 'seasons',
        method: 'POST',
        body: {
          label,
          startDate
        }
      })
    }),
    updateSeason: builder.mutation<SeasonDetailsResponseModel, SeasonUpdateInputWithId>({
      query: (data) => {
        const {id} = data;
        const dataToPut: Prisma.SeasonUpdateInput = {
          label: data.label,
          startDate: data.startDate,
        }
        return {
          url: `seasons/${id}`,
          method: 'PUT',
          body: dataToPut
        }
      }
    }),
    deleteSeason: builder.mutation<undefined, String>({
      query: (id) => ({
        url: `seasons/${id}`,
        method: 'DELETE'
      })
    })
  }),
})
export const {
  useGetSeasonsQuery,
  useGetSeasonQuery,
  useCreateSeasonMutation,
  useUpdateSeasonMutation,
  useDeleteSeasonMutation,
} = seasonsApi
export const {
  endpoints: {
    getSeasons,
    getSeason,
    createSeason,
    updateSeason,
    deleteSeason
  }
} = seasonsApi
