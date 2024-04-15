import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUncheckedCreateInput> = z
  .object({
    matchId: z.string(),
    musicianId: z.string(),
  })
  .strict();

export const MatchPlayerUncheckedCreateInputObjectSchema = Schema;
