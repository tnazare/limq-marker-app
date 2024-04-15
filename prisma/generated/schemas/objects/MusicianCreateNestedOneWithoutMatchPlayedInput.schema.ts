import { z } from 'zod';
import { MusicianCreateWithoutMatchPlayedInputObjectSchema } from './MusicianCreateWithoutMatchPlayedInput.schema';
import { MusicianUncheckedCreateWithoutMatchPlayedInputObjectSchema } from './MusicianUncheckedCreateWithoutMatchPlayedInput.schema';
import { MusicianCreateOrConnectWithoutMatchPlayedInputObjectSchema } from './MusicianCreateOrConnectWithoutMatchPlayedInput.schema';
import { MusicianWhereUniqueInputObjectSchema } from './MusicianWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianCreateNestedOneWithoutMatchPlayedInput> =
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
      connect: z.lazy(() => MusicianWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const MusicianCreateNestedOneWithoutMatchPlayedInputObjectSchema =
  Schema;
