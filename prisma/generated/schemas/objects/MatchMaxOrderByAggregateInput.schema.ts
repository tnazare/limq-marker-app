import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    matchPlayerId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MatchMaxOrderByAggregateInputObjectSchema = Schema;
