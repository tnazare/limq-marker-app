import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MatchPlayerOrderByRelationAggregateInputObjectSchema } from './MatchPlayerOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    matchPlayerId: z.lazy(() => SortOrderSchema).optional(),
    matchPlayers: z
      .lazy(() => MatchPlayerOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MatchOrderByWithRelationInputObjectSchema = Schema;
