import type {Prisma} from '@prisma/client';
import type {seasonTeamSelector} from "@/features/seasonTeams/prismaSelectors/seasonTeamSelector";

export type SeasonTeamPayload = Prisma.SeasonTeamGetPayload<{ select: typeof seasonTeamSelector }>;
