import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerCountAggregateInputType> = z
  .object({
    matchId: z.literal(true).optional(),
    musicianId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const MatchPlayerCountAggregateInputObjectSchema = Schema;
