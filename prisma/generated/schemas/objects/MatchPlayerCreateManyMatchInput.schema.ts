import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerCreateManyMatchInput> = z
  .object({
    musicianId: z.string(),
  })
  .strict();

export const MatchPlayerCreateManyMatchInputObjectSchema = Schema;
