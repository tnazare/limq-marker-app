import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    date: z.literal(true).optional(),
    matchPlayerId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const MatchCountAggregateInputObjectSchema = Schema;
