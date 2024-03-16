import { z } from 'zod';
import { MatchPlayerCreateWithoutMusicianInputObjectSchema } from './MatchPlayerCreateWithoutMusicianInput.schema';
import { MatchPlayerUncheckedCreateWithoutMusicianInputObjectSchema } from './MatchPlayerUncheckedCreateWithoutMusicianInput.schema';
import { MatchPlayerCreateOrConnectWithoutMusicianInputObjectSchema } from './MatchPlayerCreateOrConnectWithoutMusicianInput.schema';
import { MatchPlayerCreateManyMusicianInputEnvelopeObjectSchema } from './MatchPlayerCreateManyMusicianInputEnvelope.schema';
import { MatchPlayerWhereUniqueInputObjectSchema } from './MatchPlayerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUncheckedCreateNestedManyWithoutMusicianInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MatchPlayerCreateWithoutMusicianInputObjectSchema),
          z
            .lazy(() => MatchPlayerCreateWithoutMusicianInputObjectSchema)
            .array(),
          z.lazy(
            () => MatchPlayerUncheckedCreateWithoutMusicianInputObjectSchema,
          ),
          z
            .lazy(
              () => MatchPlayerUncheckedCreateWithoutMusicianInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MatchPlayerCreateOrConnectWithoutMusicianInputObjectSchema,
          ),
          z
            .lazy(
              () => MatchPlayerCreateOrConnectWithoutMusicianInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MatchPlayerCreateManyMusicianInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema),
          z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MatchPlayerUncheckedCreateNestedManyWithoutMusicianInputObjectSchema =
  Schema;
