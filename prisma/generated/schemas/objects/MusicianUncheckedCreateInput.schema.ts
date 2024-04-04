import { z } from 'zod';
import { MatchPlayerUncheckedCreateNestedManyWithoutMusicianInputObjectSchema } from './MatchPlayerUncheckedCreateNestedManyWithoutMusicianInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    firstName: z.string(),
    lastName: z.string(),
    shortDescription: z.string().optional().nullable(),
    biography: z.string().optional().nullable(),
    musicianNumber: z.number().optional().nullable(),
    matchPlayed: z
      .lazy(
        () =>
          MatchPlayerUncheckedCreateNestedManyWithoutMusicianInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MusicianUncheckedCreateInputObjectSchema = Schema;
