import type {Prisma} from '@prisma/client';
import type {teamSelector} from "@/features/teams/prismaSelectors/teamSelector";

export type TeamPayload = Prisma.TeamGetPayload<{ select: typeof teamSelector }>;
