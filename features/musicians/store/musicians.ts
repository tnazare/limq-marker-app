import { api } from '@/features/common/store/api'
import type { Prisma } from '@prisma/client'
import type { MusicianDetailsResponseModel } from '@/features/musicians/restResponseModels/musicianDetailsResponseModel'
import type { MusiciansListResponseModel } from '@/features/musicians/restResponseModels/musiciansListResponseModel'

type MusicianUpdateInputWithId = Prisma.MusicianUpdateInput & {
  id: string
}
export const musiciansApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMusicians: builder.query<MusiciansListResponseModel, void>({
      query: () => 'musicians',
    }),
    getMusician: builder.query<MusicianDetailsResponseModel, string>({
      query: (id) => `musicians/${id}`,
    }),
    createMusician: builder.mutation<MusicianDetailsResponseModel, Prisma.MusicianCreateInput>({
      query: (body) => ({
        url: 'musicians',
        method: 'POST',
        body
      })
    }),
    updateMusician: builder.mutation<MusicianDetailsResponseModel, MusicianUpdateInputWithId>({
      query: (data) => {
        const { id } = data;
        const dataToPut: Prisma.MusicianUpdateInput = {
          firstName: data.firstName,
          lastName: data.lastName,
          shortDescription: data.shortDescription,
          biography: data.biography
        }
        return {
          url: `musicians/${id}`,
          method: 'PUT',
          body: dataToPut
        }
      }
    }),
    deleteMusician: builder.mutation<undefined, String>({
      query: (id) => ({
          url: `musicians/${id}`,
          method: 'DELETE'
        })
    })
  }),
})
export const {
  useGetMusiciansQuery,
  useGetMusicianQuery,
  useCreateMusicianMutation,
  useUpdateMusicianMutation,
  useDeleteMusicianMutation,
} = musiciansApi
export const {
  endpoints: {
    getMusicians,
    getMusician,
    createMusician,
    updateMusician,
    deleteMusician
  }
} = musiciansApi
