import type { Prisma } from '@prisma/client';
import type { musicianSelector } from "@/features/musicians/prismaSelectors/musicianSelector";

export type MusicianPayload = Prisma.MusicianGetPayload<{ select: typeof musicianSelector }>;
