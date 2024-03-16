import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MusicianCountOrderByAggregateInputObjectSchema } from './MusicianCountOrderByAggregateInput.schema';
import { MusicianMaxOrderByAggregateInputObjectSchema } from './MusicianMaxOrderByAggregateInput.schema';
import { MusicianMinOrderByAggregateInputObjectSchema } from './MusicianMinOrderByAggregateInput.schema';

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
    _count: z
      .lazy(() => MusicianCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => MusicianMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MusicianMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MusicianOrderByWithAggregationInputObjectSchema = Schema;
