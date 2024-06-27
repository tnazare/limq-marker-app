import type {RestApplicationResponseModel} from "@/features/common/restResponseModels/restApplicationResponseModel";
import type {SeasonPayload} from "@/features/seasons/prismaPayloads/seasonPayload";

export type SeasonDetailsResponseModel = RestApplicationResponseModel<SeasonPayload>;
