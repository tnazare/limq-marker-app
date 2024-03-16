import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MatchPlayerScalarWhereInputObjectSchema),
        z.lazy(() => MatchPlayerScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MatchPlayerScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MatchPlayerScalarWhereInputObjectSchema),
        z.lazy(() => MatchPlayerScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    matchId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    musicianId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const MatchPlayerScalarWhereInputObjectSchema = Schema;
