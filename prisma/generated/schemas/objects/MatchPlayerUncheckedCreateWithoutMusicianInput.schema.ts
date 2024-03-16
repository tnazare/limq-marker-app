import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUncheckedCreateWithoutMusicianInput> =
  z
    .object({
      matchId: z.string(),
    })
    .strict();

export const MatchPlayerUncheckedCreateWithoutMusicianInputObjectSchema =
  Schema;
