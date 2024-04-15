import { z } from 'zod';
import { MatchPlayerCreateWithoutMusicianInputObjectSchema } from './MatchPlayerCreateWithoutMusicianInput.schema';
import { MatchPlayerUncheckedCreateWithoutMusicianInputObjectSchema } from './MatchPlayerUncheckedCreateWithoutMusicianInput.schema';
import { MatchPlayerCreateOrConnectWithoutMusicianInputObjectSchema } from './MatchPlayerCreateOrConnectWithoutMusicianInput.schema';
import { MatchPlayerUpsertWithWhereUniqueWithoutMusicianInputObjectSchema } from './MatchPlayerUpsertWithWhereUniqueWithoutMusicianInput.schema';
import { MatchPlayerCreateManyMusicianInputEnvelopeObjectSchema } from './MatchPlayerCreateManyMusicianInputEnvelope.schema';
import { MatchPlayerWhereUniqueInputObjectSchema } from './MatchPlayerWhereUniqueInput.schema';
import { MatchPlayerUpdateWithWhereUniqueWithoutMusicianInputObjectSchema } from './MatchPlayerUpdateWithWhereUniqueWithoutMusicianInput.schema';
import { MatchPlayerUpdateManyWithWhereWithoutMusicianInputObjectSchema } from './MatchPlayerUpdateManyWithWhereWithoutMusicianInput.schema';
import { MatchPlayerScalarWhereInputObjectSchema } from './MatchPlayerScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUncheckedUpdateManyWithoutMusicianNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              MatchPlayerUpsertWithWhereUniqueWithoutMusicianInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MatchPlayerUpsertWithWhereUniqueWithoutMusicianInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MatchPlayerCreateManyMusicianInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema),
          z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema),
          z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema),
          z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema),
          z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MatchPlayerUpdateWithWhereUniqueWithoutMusicianInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MatchPlayerUpdateWithWhereUniqueWithoutMusicianInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MatchPlayerUpdateManyWithWhereWithoutMusicianInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MatchPlayerUpdateManyWithWhereWithoutMusicianInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MatchPlayerScalarWhereInputObjectSchema),
          z.lazy(() => MatchPlayerScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MatchPlayerUncheckedUpdateManyWithoutMusicianNestedInputObjectSchema =
  Schema;
