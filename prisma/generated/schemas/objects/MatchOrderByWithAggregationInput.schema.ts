import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MatchCountOrderByAggregateInputObjectSchema } from './MatchCountOrderByAggregateInput.schema';
import { MatchMaxOrderByAggregateInputObjectSchema } from './MatchMaxOrderByAggregateInput.schema';
import { MatchMinOrderByAggregateInputObjectSchema } from './MatchMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    matchPlayerId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MatchCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => MatchMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MatchMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MatchOrderByWithAggregationInputObjectSchema = Schema;
