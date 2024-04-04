import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianAvgAggregateInputType> = z
  .object({
    musicianNumber: z.literal(true).optional(),
  })
  .strict();

export const MusicianAvgAggregateInputObjectSchema = Schema;
