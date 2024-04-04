import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianSumAggregateInputType> = z
  .object({
    musicianNumber: z.literal(true).optional(),
  })
  .strict();

export const MusicianSumAggregateInputObjectSchema = Schema;
