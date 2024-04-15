import { NextResponse } from "next/server"
import type { StatusCode } from "status-code-enum"
import type { RestApplicationErrorResponseModel } from "@/features/common/restResponseModels/restApplicationErrorResponseModel"
import type { RestApplicationResponseModel } from "@/features/common/restResponseModels/restApplicationResponseModel"

export function restErrorResponseBuilder(initialMessage: string, statusCode: StatusCode): (additionalDetails?: string) => NextResponse {
  return function <T>(additionalDetails?: string): NextResponse {
    let finalMessage = initialMessage;
    if (additionalDetails) {
      finalMessage += `: ${additionalDetails}`
    }
    const errorMessage: RestApplicationErrorResponseModel = {
      message: finalMessage,
    }
    const restResponse: RestApplicationResponseModel<T> = {
      error: errorMessage
    }
    return NextResponse.json(restResponse, { status: statusCode })
  }
}
