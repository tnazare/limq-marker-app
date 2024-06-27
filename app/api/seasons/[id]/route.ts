import {deleteSeasonRequestHandler} from "@/features/seasons/restRequestHandlers/deleteSeasonRequestHandler";
import {getSeasonDetailsRequestHandler} from "@/features/seasons/restRequestHandlers/getSeasonDetailsRequestHandler";
import {updateSeasonRequestHandler} from "@/features/seasons/restRequestHandlers/updateSeasonRequestHandler";

export {
  deleteSeasonRequestHandler as DELETE,
  getSeasonDetailsRequestHandler as GET,
  updateSeasonRequestHandler as PUT
}
