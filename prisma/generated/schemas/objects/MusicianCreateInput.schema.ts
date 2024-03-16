import { z } from 'zod';
import { MatchPlayerCreateNestedManyWithoutMusicianInputObjectSchema } from './MatchPlayerCreateNestedManyWithoutMusicianInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianCreateInput> = z
  .object({
    id: z.string().optional(),
    firstName: z.string(),
    lastName: z.string(),
    shortDescription: z.string().optional().nullable(),
    biography: z.string().optional().nullable(),
    matchPlayed: z
      .lazy(() => MatchPlayerCreateNestedManyWithoutMusicianInputObjectSchema)
      .optional(),
  })
  .strict();

export const MusicianCreateInputObjectSchema = Schema;
