import type {RestApplicationResponseModel} from "@/features/common/restResponseModels/restApplicationResponseModel";
import {SeasonTeamPayload} from "@/features/seasonTeams/prismaPayloads/seasonTeamPayload";

export type SeasonTeamsListResponseModel = RestApplicationResponseModel<SeasonTeamPayload[]>;
