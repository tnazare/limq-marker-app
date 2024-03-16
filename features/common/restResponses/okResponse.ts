import {NextResponse} from "next/server"
import {StatusCode} from "status-code-enum"
import type {RestApplicationResponseModel} from "@/features/common/restResponseModels/restApplicationResponseModel"

export function okResponse<T>(data: T): NextResponse {
  const restResponse: RestApplicationResponseModel<T> = {
    data
  }
  return NextResponse.json(restResponse, {status: StatusCode.SuccessOK})
}
