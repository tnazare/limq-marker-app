import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    date: z.literal(true).optional(),
    matchPlayerId: z.literal(true).optional(),
  })
  .strict();

export const MatchMaxAggregateInputObjectSchema = Schema;
