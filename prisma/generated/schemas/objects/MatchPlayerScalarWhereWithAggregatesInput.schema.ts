import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MatchPlayerScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => MatchPlayerScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MatchPlayerScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MatchPlayerScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => MatchPlayerScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    matchId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    musicianId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const MatchPlayerScalarWhereWithAggregatesInputObjectSchema = Schema;
