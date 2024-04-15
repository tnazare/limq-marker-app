import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MatchPlayerCountOrderByAggregateInputObjectSchema } from './MatchPlayerCountOrderByAggregateInput.schema';
import { MatchPlayerMaxOrderByAggregateInputObjectSchema } from './MatchPlayerMaxOrderByAggregateInput.schema';
import { MatchPlayerMinOrderByAggregateInputObjectSchema } from './MatchPlayerMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerOrderByWithAggregationInput> = z
  .object({
    matchId: z.lazy(() => SortOrderSchema).optional(),
    musicianId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MatchPlayerCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => MatchPlayerMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => MatchPlayerMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MatchPlayerOrderByWithAggregationInputObjectSchema = Schema;
