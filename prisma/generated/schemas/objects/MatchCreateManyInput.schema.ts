import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchCreateManyInput> = z
  .object({
    id: z.string().optional(),
    date: z.coerce.date(),
    matchPlayerId: z.string(),
  })
  .strict();

export const MatchCreateManyInputObjectSchema = Schema;
