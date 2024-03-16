import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MatchPlayerListRelationFilterObjectSchema } from './MatchPlayerListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MatchWhereInputObjectSchema),
        z.lazy(() => MatchWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MatchWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MatchWhereInputObjectSchema),
        z.lazy(() => MatchWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    matchPlayerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    matchPlayers: z
      .lazy(() => MatchPlayerListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const MatchWhereInputObjectSchema = Schema;
