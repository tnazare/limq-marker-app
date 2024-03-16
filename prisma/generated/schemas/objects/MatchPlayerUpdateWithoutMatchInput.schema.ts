import { z } from 'zod';
import { MusicianUpdateOneRequiredWithoutMatchPlayedNestedInputObjectSchema } from './MusicianUpdateOneRequiredWithoutMatchPlayedNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUpdateWithoutMatchInput> = z
  .object({
    musician: z
      .lazy(
        () =>
          MusicianUpdateOneRequiredWithoutMatchPlayedNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MatchPlayerUpdateWithoutMatchInputObjectSchema = Schema;
