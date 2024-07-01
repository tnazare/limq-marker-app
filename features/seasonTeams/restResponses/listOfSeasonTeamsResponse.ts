import {okResponse} from "@/features/common/restResponses/okResponse";
import type {NextResponse} from "next/server";
import type {SeasonTeamPayload} from "@/features/seasonTeams/prismaPayloads/seasonTeamPayload";

export const seasonTeamsListResponse = (seasonTeams: SeasonTeamPayload[]): NextResponse => okResponse(seasonTeams)
