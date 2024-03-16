import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    firstName: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    shortDescription: z.literal(true).optional(),
    biography: z.literal(true).optional(),
  })
  .strict();

export const MusicianMinAggregateInputObjectSchema = Schema;
