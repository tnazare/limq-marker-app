import { z } from 'zod';
import { MusicianCreateWithoutMatchPlayedInputObjectSchema } from './MusicianCreateWithoutMatchPlayedInput.schema';
import { MusicianUncheckedCreateWithoutMatchPlayedInputObjectSchema } from './MusicianUncheckedCreateWithoutMatchPlayedInput.schema';
import { MusicianCreateOrConnectWithoutMatchPlayedInputObjectSchema } from './MusicianCreateOrConnectWithoutMatchPlayedInput.schema';
import { MusicianUpsertWithoutMatchPlayedInputObjectSchema } from './MusicianUpsertWithoutMatchPlayedInput.schema';
import { MusicianWhereUniqueInputObjectSchema } from './MusicianWhereUniqueInput.schema';
import { MusicianUpdateWithoutMatchPlayedInputObjectSchema } from './MusicianUpdateWithoutMatchPlayedInput.schema';
import { MusicianUncheckedUpdateWithoutMatchPlayedInputObjectSchema } from './MusicianUncheckedUpdateWithoutMatchPlayedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianUpdateOneRequiredWithoutMatchPlayedNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MusicianCreateWithoutMatchPlayedInputObjectSchema),
          z.lazy(
            () => MusicianUncheckedCreateWithoutMatchPlayedInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MusicianCreateOrConnectWithoutMatchPlayedInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => MusicianUpsertWithoutMatchPlayedInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MusicianWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MusicianUpdateWithoutMatchPlayedInputObjectSchema),
          z.lazy(
            () => MusicianUncheckedUpdateWithoutMatchPlayedInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MusicianUpdateOneRequiredWithoutMatchPlayedNestedInputObjectSchema =
  Schema;
