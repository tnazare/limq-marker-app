import { z } from 'zod';
import { MatchPlayerMatchIdMusicianIdCompoundUniqueInputObjectSchema } from './MatchPlayerMatchIdMusicianIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerWhereUniqueInput> = z
  .object({
    matchId_musicianId: z
      .lazy(() => MatchPlayerMatchIdMusicianIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const MatchPlayerWhereUniqueInputObjectSchema = Schema;
