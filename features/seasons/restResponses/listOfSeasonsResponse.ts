import {okResponse} from "@/features/common/restResponses/okResponse";
import type {NextResponse} from "next/server";
import type {SeasonPayload} from "@/features/seasons/prismaPayloads/seasonPayload";

export const seasonsListResponse = (seasons: SeasonPayload[]): NextResponse => okResponse(seasons)
