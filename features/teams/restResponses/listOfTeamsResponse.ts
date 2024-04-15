import {okResponse} from "@/features/common/restResponses/okResponse";
import type {NextResponse} from "next/server";
import type {TeamPayload} from "@/features/teams/prismaPayloads/teamPayload";

export const teamsListResponse = (teams: TeamPayload[]): NextResponse => okResponse(teams)
