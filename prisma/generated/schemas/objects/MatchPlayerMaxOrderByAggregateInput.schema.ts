import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerMaxOrderByAggregateInput> = z
  .object({
    matchId: z.lazy(() => SortOrderSchema).optional(),
    musicianId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MatchPlayerMaxOrderByAggregateInputObjectSchema = Schema;
