import { z } from 'zod';
import { MatchCreateNestedOneWithoutMatchPlayersInputObjectSchema } from './MatchCreateNestedOneWithoutMatchPlayersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerCreateWithoutMusicianInput> = z
  .object({
    match: z.lazy(
      () => MatchCreateNestedOneWithoutMatchPlayersInputObjectSchema,
    ),
  })
  .strict();

export const MatchPlayerCreateWithoutMusicianInputObjectSchema = Schema;
