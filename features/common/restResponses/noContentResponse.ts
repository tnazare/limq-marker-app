import {NextResponse} from "next/server"
import {StatusCode} from "status-code-enum"

export const noContentResponse = (): NextResponse => {
  const nextResponse = new NextResponse(null, {status: StatusCode.SuccessNoContent});
  return nextResponse;
}
