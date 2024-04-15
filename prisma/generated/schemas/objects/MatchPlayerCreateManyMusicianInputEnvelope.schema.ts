import { z } from 'zod';
import { MatchPlayerCreateManyMusicianInputObjectSchema } from './MatchPlayerCreateManyMusicianInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerCreateManyMusicianInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MatchPlayerCreateManyMusicianInputObjectSchema),
      z.lazy(() => MatchPlayerCreateManyMusicianInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MatchPlayerCreateManyMusicianInputEnvelopeObjectSchema = Schema;
