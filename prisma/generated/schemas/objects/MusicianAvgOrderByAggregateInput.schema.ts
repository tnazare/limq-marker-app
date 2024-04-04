import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianAvgOrderByAggregateInput> = z
  .object({
    musicianNumber: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MusicianAvgOrderByAggregateInputObjectSchema = Schema;
