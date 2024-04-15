import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerCreateManyMusicianInput> = z
  .object({
    matchId: z.string(),
  })
  .strict();

export const MatchPlayerCreateManyMusicianInputObjectSchema = Schema;
