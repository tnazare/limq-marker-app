import { z } from 'zod';
import { MatchPlayerWhereInputObjectSchema } from './MatchPlayerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerListRelationFilter> = z
  .object({
    every: z.lazy(() => MatchPlayerWhereInputObjectSchema).optional(),
    some: z.lazy(() => MatchPlayerWhereInputObjectSchema).optional(),
    none: z.lazy(() => MatchPlayerWhereInputObjectSchema).optional(),
  })
  .strict();

export const MatchPlayerListRelationFilterObjectSchema = Schema;
