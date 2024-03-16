import { z } from 'zod';
import { MatchPlayerCreateWithoutMatchInputObjectSchema } from './MatchPlayerCreateWithoutMatchInput.schema';
import { MatchPlayerUncheckedCreateWithoutMatchInputObjectSchema } from './MatchPlayerUncheckedCreateWithoutMatchInput.schema';
import { MatchPlayerCreateOrConnectWithoutMatchInputObjectSchema } from './MatchPlayerCreateOrConnectWithoutMatchInput.schema';
import { MatchPlayerCreateManyMatchInputEnvelopeObjectSchema } from './MatchPlayerCreateManyMatchInputEnvelope.schema';
import { MatchPlayerWhereUniqueInputObjectSchema } from './MatchPlayerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUncheckedCreateNestedManyWithoutMatchInput> =
  z
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
      createMany: z
        .lazy(() => MatchPlayerCreateManyMatchInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema),
          z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MatchPlayerUncheckedCreateNestedManyWithoutMatchInputObjectSchema =
  Schema;
