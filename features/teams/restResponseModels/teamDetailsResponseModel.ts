import type {RestApplicationResponseModel} from "@/features/common/restResponseModels/restApplicationResponseModel";
import type {TeamPayload} from "@/features/teams/prismaPayloads/teamPayload";

export type TeamDetailsResponseModel = RestApplicationResponseModel<TeamPayload>;
