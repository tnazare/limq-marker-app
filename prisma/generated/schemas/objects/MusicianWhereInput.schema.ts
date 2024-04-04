import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { MatchPlayerListRelationFilterObjectSchema } from './MatchPlayerListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MusicianWhereInputObjectSchema),
        z.lazy(() => MusicianWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MusicianWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MusicianWhereInputObjectSchema),
        z.lazy(() => MusicianWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    firstName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    shortDescription: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    biography: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    musicianNumber: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    matchPlayed: z
      .lazy(() => MatchPlayerListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const MusicianWhereInputObjectSchema = Schema;
