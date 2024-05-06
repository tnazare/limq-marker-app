import type { SeasonIdParams } from "@/features/common/params/seasonIdParams";

export const seasonIdParameterValidator = ({ params }: SeasonIdParams): { isValid: boolean, errorMessage?: string } => ({ isValid: true })
