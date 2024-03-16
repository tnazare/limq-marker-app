import { z } from 'zod';
import { MatchWhereInputObjectSchema } from './MatchWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchRelationFilter> = z
  .object({
    is: z
      .lazy(() => MatchWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MatchWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const MatchRelationFilterObjectSchema = Schema;
