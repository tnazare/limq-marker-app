import {deleteMusicianRequestHandler} from "@/features/musicians/restRequestHandlers/deleteMusicianRequestHandler"
import {
  getMusicianDetailsRequestHandler
} from "@/features/musicians/restRequestHandlers/getMusicianDetailsRequestHandler"
import {updateMusicianRequestHandler} from "@/features/musicians/restRequestHandlers/updateMusicianRequestHandler"

export {
  deleteMusicianRequestHandler as DELETE,
  getMusicianDetailsRequestHandler as GET,
  updateMusicianRequestHandler as PUT
}
