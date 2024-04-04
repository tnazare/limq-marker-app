import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MusicianCountOrderByAggregateInputObjectSchema } from './MusicianCountOrderByAggregateInput.schema';
import { MusicianAvgOrderByAggregateInputObjectSchema } from './MusicianAvgOrderByAggregateInput.schema';
import { MusicianMaxOrderByAggregateInputObjectSchema } from './MusicianMaxOrderByAggregateInput.schema';
import { MusicianMinOrderByAggregateInputObjectSchema } from './MusicianMinOrderByAggregateInput.schema';
import { MusicianSumOrderByAggregateInputObjectSchema } from './MusicianSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    shortDescription: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    biography: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    musicianNumber: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => MusicianCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => MusicianAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => MusicianMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MusicianMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => MusicianSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MusicianOrderByWithAggregationInputObjectSchema = Schema;
