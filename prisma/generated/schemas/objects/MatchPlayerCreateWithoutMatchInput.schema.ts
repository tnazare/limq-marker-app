import { z } from 'zod';
import { MusicianCreateNestedOneWithoutMatchPlayedInputObjectSchema } from './MusicianCreateNestedOneWithoutMatchPlayedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerCreateWithoutMatchInput> = z
  .object({
    musician: z.lazy(
      () => MusicianCreateNestedOneWithoutMatchPlayedInputObjectSchema,
    ),
  })
  .strict();

export const MatchPlayerCreateWithoutMatchInputObjectSchema = Schema;
