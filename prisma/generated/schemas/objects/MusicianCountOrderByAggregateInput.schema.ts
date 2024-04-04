import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    shortDescription: z.lazy(() => SortOrderSchema).optional(),
    biography: z.lazy(() => SortOrderSchema).optional(),
    musicianNumber: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MusicianCountOrderByAggregateInputObjectSchema = Schema;
