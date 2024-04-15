import { z } from 'zod';
import { MusicianWhereInputObjectSchema } from './MusicianWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianRelationFilter> = z
  .object({
    is: z
      .lazy(() => MusicianWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MusicianWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const MusicianRelationFilterObjectSchema = Schema;
