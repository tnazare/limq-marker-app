import { z } from 'zod';
import { MatchPlayerCreateNestedManyWithoutMatchInputObjectSchema } from './MatchPlayerCreateNestedManyWithoutMatchInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchCreateInput> = z
  .object({
    id: z.string().optional(),
    date: z.coerce.date(),
    matchPlayerId: z.string(),
    matchPlayers: z
      .lazy(() => MatchPlayerCreateNestedManyWithoutMatchInputObjectSchema)
      .optional(),
  })
  .strict();

export const MatchCreateInputObjectSchema = Schema;
