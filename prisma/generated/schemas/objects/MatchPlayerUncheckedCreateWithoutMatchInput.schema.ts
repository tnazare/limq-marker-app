import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUncheckedCreateWithoutMatchInput> = z
  .object({
    musicianId: z.string(),
  })
  .strict();

export const MatchPlayerUncheckedCreateWithoutMatchInputObjectSchema = Schema;
