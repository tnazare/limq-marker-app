import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    shortDescription: z.lazy(() => SortOrderSchema).optional(),
    biography: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MusicianMinOrderByAggregateInputObjectSchema = Schema;
