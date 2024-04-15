import { z } from 'zod';
import { MatchCreateNestedOneWithoutMatchPlayersInputObjectSchema } from './MatchCreateNestedOneWithoutMatchPlayersInput.schema';
import { MusicianCreateNestedOneWithoutMatchPlayedInputObjectSchema } from './MusicianCreateNestedOneWithoutMatchPlayedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerCreateInput> = z
  .object({
    match: z.lazy(
      () => MatchCreateNestedOneWithoutMatchPlayersInputObjectSchema,
    ),
    musician: z.lazy(
      () => MusicianCreateNestedOneWithoutMatchPlayedInputObjectSchema,
    ),
  })
  .strict();

export const MatchPlayerCreateInputObjectSchema = Schema;
