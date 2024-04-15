import { z } from 'zod';
import { MusicianUpdateWithoutMatchPlayedInputObjectSchema } from './MusicianUpdateWithoutMatchPlayedInput.schema';
import { MusicianUncheckedUpdateWithoutMatchPlayedInputObjectSchema } from './MusicianUncheckedUpdateWithoutMatchPlayedInput.schema';
import { MusicianCreateWithoutMatchPlayedInputObjectSchema } from './MusicianCreateWithoutMatchPlayedInput.schema';
import { MusicianUncheckedCreateWithoutMatchPlayedInputObjectSchema } from './MusicianUncheckedCreateWithoutMatchPlayedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianUpsertWithoutMatchPlayedInput> = z
  .object({
    update: z.union([
      z.lazy(() => MusicianUpdateWithoutMatchPlayedInputObjectSchema),
      z.lazy(() => MusicianUncheckedUpdateWithoutMatchPlayedInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MusicianCreateWithoutMatchPlayedInputObjectSchema),
      z.lazy(() => MusicianUncheckedCreateWithoutMatchPlayedInputObjectSchema),
    ]),
  })
  .strict();

export const MusicianUpsertWithoutMatchPlayedInputObjectSchema = Schema;
