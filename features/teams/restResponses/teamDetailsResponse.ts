import {okResponse} from "@/features/common/restResponses/okResponse";
import type {NextResponse} from "next/server";
import type {TeamPayload} from "@/features/teams/prismaPayloads/teamPayload";

export const teamDetailsResponse = (team: TeamPayload): NextResponse => okResponse(team)
