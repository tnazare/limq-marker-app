import { z } from 'zod';
import { MatchPlayerCreateWithoutMatchInputObjectSchema } from './MatchPlayerCreateWithoutMatchInput.schema';
import { MatchPlayerUncheckedCreateWithoutMatchInputObjectSchema } from './MatchPlayerUncheckedCreateWithoutMatchInput.schema';
import { MatchPlayerCreateOrConnectWithoutMatchInputObjectSchema } from './MatchPlayerCreateOrConnectWithoutMatchInput.schema';
import { MatchPlayerUpsertWithWhereUniqueWithoutMatchInputObjectSchema } from './MatchPlayerUpsertWithWhereUniqueWithoutMatchInput.schema';
import { MatchPlayerCreateManyMatchInputEnvelopeObjectSchema } from './MatchPlayerCreateManyMatchInputEnvelope.schema';
import { MatchPlayerWhereUniqueInputObjectSchema } from './MatchPlayerWhereUniqueInput.schema';
import { MatchPlayerUpdateWithWhereUniqueWithoutMatchInputObjectSchema } from './MatchPlayerUpdateWithWhereUniqueWithoutMatchInput.schema';
import { MatchPlayerUpdateManyWithWhereWithoutMatchInputObjectSchema } from './MatchPlayerUpdateManyWithWhereWithoutMatchInput.schema';
import { MatchPlayerScalarWhereInputObjectSchema } from './MatchPlayerScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUpdateManyWithoutMatchNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MatchPlayerCreateWithoutMatchInputObjectSchema),
        z.lazy(() => MatchPlayerCreateWithoutMatchInputObjectSchema).array(),
        z.lazy(() => MatchPlayerUncheckedCreateWithoutMatchInputObjectSchema),
        z
          .lazy(() => MatchPlayerUncheckedCreateWithoutMatchInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MatchPlayerCreateOrConnectWithoutMatchInputObjectSchema),
        z
          .lazy(() => MatchPlayerCreateOrConnectWithoutMatchInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => MatchPlayerUpsertWithWhereUniqueWithoutMatchInputObjectSchema,
        ),
        z
          .lazy(
            () => MatchPlayerUpsertWithWhereUniqueWithoutMatchInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MatchPlayerCreateManyMatchInputEnvelopeObjectSchema)
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
          () => MatchPlayerUpdateWithWhereUniqueWithoutMatchInputObjectSchema,
        ),
        z
          .lazy(
            () => MatchPlayerUpdateWithWhereUniqueWithoutMatchInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => MatchPlayerUpdateManyWithWhereWithoutMatchInputObjectSchema,
        ),
        z
          .lazy(
            () => MatchPlayerUpdateManyWithWhereWithoutMatchInputObjectSchema,
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

export const MatchPlayerUpdateManyWithoutMatchNestedInputObjectSchema = Schema;
