import { StatusCode } from "status-code-enum"
import { restErrorResponseBuilder } from "./restErrorResponseBuilder";

export function constraintExceptionErrorResponse(message: string) {
  return restErrorResponseBuilder(message, StatusCode.ClientErrorConflict)
};
