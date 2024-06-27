import type {Prisma} from '@prisma/client';
import type {seasonSelector, seasonWithMatchesAndTeamsSelector} from "@/features/seasons/prismaSelectors/seasonSelector";

export type SeasonPayload = Prisma.SeasonGetPayload<{ select: typeof seasonSelector }>;
export type SeasonPayloadWithMatchesAndTeams = Prisma.SeasonGetPayload<{
  select: typeof seasonWithMatchesAndTeamsSelector
}>;
