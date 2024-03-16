import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MatchOrderByWithRelationInputObjectSchema } from './MatchOrderByWithRelationInput.schema';
import { MusicianOrderByWithRelationInputObjectSchema } from './MusicianOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerOrderByWithRelationInput> = z
  .object({
    matchId: z.lazy(() => SortOrderSchema).optional(),
    musicianId: z.lazy(() => SortOrderSchema).optional(),
    match: z.lazy(() => MatchOrderByWithRelationInputObjectSchema).optional(),
    musician: z
      .lazy(() => MusicianOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const MatchPlayerOrderByWithRelationInputObjectSchema = Schema;
