import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const MatchWhereUniqueInputObjectSchema = Schema;
