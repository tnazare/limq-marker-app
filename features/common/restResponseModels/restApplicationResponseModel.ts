import type { RestApplicationErrorResponseModel } from "@/features/common/restResponseModels/restApplicationErrorResponseModel";

export interface RestApplicationResponseModel<T> {
  data?: T;
  error?: RestApplicationErrorResponseModel;
}
