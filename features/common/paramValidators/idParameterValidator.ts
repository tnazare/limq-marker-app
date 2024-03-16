import type { IdParams } from "@/features/common/params/idParams";

export const idParameterValidator = ({ params }: IdParams): { isValid: boolean, errorMessage?: string } => ({ isValid: true })
