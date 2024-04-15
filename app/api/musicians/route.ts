import { createMusicianRequestHandler } from '@/features/musicians/restRequestHandlers/createMusicianRequestHandler'
import { getListOfMusiciansRequestHandler } from '@/features/musicians/restRequestHandlers/getListOfMusiciansRequestHandler'

export {
  getListOfMusiciansRequestHandler as GET,
  createMusicianRequestHandler as POST
}
