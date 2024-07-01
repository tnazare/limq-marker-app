import type { SeasonTeamIdParams } from "@/features/common/params/seasonTeamIdParams";

export const seasonTeamIdParameterValidator = ({ params }: SeasonTeamIdParams): { isValid: boolean, errorMessage?: string } => ({ isValid: true })
