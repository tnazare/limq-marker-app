import { z } from 'zod';
import { MusicianWhereUniqueInputObjectSchema } from './MusicianWhereUniqueInput.schema';
import { MusicianCreateWithoutMatchPlayedInputObjectSchema } from './MusicianCreateWithoutMatchPlayedInput.schema';
import { MusicianUncheckedCreateWithoutMatchPlayedInputObjectSchema } from './MusicianUncheckedCreateWithoutMatchPlayedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianCreateOrConnectWithoutMatchPlayedInput> =
  z
    .object({
      where: z.lazy(() => MusicianWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MusicianCreateWithoutMatchPlayedInputObjectSchema),
        z.lazy(
          () => MusicianUncheckedCreateWithoutMatchPlayedInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MusicianCreateOrConnectWithoutMatchPlayedInputObjectSchema =
  Schema;
