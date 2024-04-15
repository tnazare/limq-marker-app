import { z } from 'zod';
import { MatchUpdateOneRequiredWithoutMatchPlayersNestedInputObjectSchema } from './MatchUpdateOneRequiredWithoutMatchPlayersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUpdateWithoutMusicianInput> = z
  .object({
    match: z
      .lazy(
        () => MatchUpdateOneRequiredWithoutMatchPlayersNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MatchPlayerUpdateWithoutMusicianInputObjectSchema = Schema;
