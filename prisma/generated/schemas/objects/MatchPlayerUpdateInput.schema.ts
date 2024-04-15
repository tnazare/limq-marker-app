import { z } from 'zod';
import { MatchUpdateOneRequiredWithoutMatchPlayersNestedInputObjectSchema } from './MatchUpdateOneRequiredWithoutMatchPlayersNestedInput.schema';
import { MusicianUpdateOneRequiredWithoutMatchPlayedNestedInputObjectSchema } from './MusicianUpdateOneRequiredWithoutMatchPlayedNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUpdateInput> = z
  .object({
    match: z
      .lazy(
        () => MatchUpdateOneRequiredWithoutMatchPlayersNestedInputObjectSchema,
      )
      .optional(),
    musician: z
      .lazy(
        () =>
          MusicianUpdateOneRequiredWithoutMatchPlayedNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MatchPlayerUpdateInputObjectSchema = Schema;
