import type { RestApplicationResponseModel } from "@/features/common/restResponseModels/restApplicationResponseModel";
import type { MusicianPayload } from "@/features/musicians/prismaPayloads/musicianPayload";

export type MusicianDetailsResponseModel = RestApplicationResponseModel<MusicianPayload>;
