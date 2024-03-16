import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { MatchRelationFilterObjectSchema } from './MatchRelationFilter.schema';
import { MatchWhereInputObjectSchema } from './MatchWhereInput.schema';
import { MusicianRelationFilterObjectSchema } from './MusicianRelationFilter.schema';
import { MusicianWhereInputObjectSchema } from './MusicianWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MatchPlayerWhereInputObjectSchema),
        z.lazy(() => MatchPlayerWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MatchPlayerWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MatchPlayerWhereInputObjectSchema),
        z.lazy(() => MatchPlayerWhereInputObjectSchema).array(),
      ])
      .optional(),
    matchId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    musicianId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    match: z
      .union([
        z.lazy(() => MatchRelationFilterObjectSchema),
        z.lazy(() => MatchWhereInputObjectSchema),
      ])
      .optional(),
    musician: z
      .union([
        z.lazy(() => MusicianRelationFilterObjectSchema),
        z.lazy(() => MusicianWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MatchPlayerWhereInputObjectSchema = Schema;
