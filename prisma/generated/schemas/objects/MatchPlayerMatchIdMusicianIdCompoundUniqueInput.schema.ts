import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerMatchIdMusicianIdCompoundUniqueInput> =
  z
    .object({
      matchId: z.string(),
      musicianId: z.string(),
    })
    .strict();

export const MatchPlayerMatchIdMusicianIdCompoundUniqueInputObjectSchema =
  Schema;
