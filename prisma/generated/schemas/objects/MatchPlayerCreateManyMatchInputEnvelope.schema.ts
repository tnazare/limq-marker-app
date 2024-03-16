import { z } from 'zod';
import { MatchPlayerCreateManyMatchInputObjectSchema } from './MatchPlayerCreateManyMatchInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerCreateManyMatchInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MatchPlayerCreateManyMatchInputObjectSchema),
      z.lazy(() => MatchPlayerCreateManyMatchInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MatchPlayerCreateManyMatchInputEnvelopeObjectSchema = Schema;
