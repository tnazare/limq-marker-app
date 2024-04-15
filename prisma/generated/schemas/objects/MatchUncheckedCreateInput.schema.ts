import { z } from 'zod';
import { MatchPlayerUncheckedCreateNestedManyWithoutMatchInputObjectSchema } from './MatchPlayerUncheckedCreateNestedManyWithoutMatchInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    date: z.coerce.date(),
    matchPlayerId: z.string(),
    matchPlayers: z
      .lazy(
        () => MatchPlayerUncheckedCreateNestedManyWithoutMatchInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MatchUncheckedCreateInputObjectSchema = Schema;
