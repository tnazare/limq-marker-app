import { okResponse } from "@/features/common/restResponses/okResponse";
import type { NextResponse } from "next/server";
import type { MusicianPayload } from "@/features/musicians/prismaPayloads/musicianPayload";

export const musiciansListResponse = (musicians: MusicianPayload[]): NextResponse => okResponse(musicians)
