import { z } from 'zod';
import { MatchCreateWithoutMatchPlayersInputObjectSchema } from './MatchCreateWithoutMatchPlayersInput.schema';
import { MatchUncheckedCreateWithoutMatchPlayersInputObjectSchema } from './MatchUncheckedCreateWithoutMatchPlayersInput.schema';
import { MatchCreateOrConnectWithoutMatchPlayersInputObjectSchema } from './MatchCreateOrConnectWithoutMatchPlayersInput.schema';
import { MatchUpsertWithoutMatchPlayersInputObjectSchema } from './MatchUpsertWithoutMatchPlayersInput.schema';
import { MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchUpdateWithoutMatchPlayersInputObjectSchema } from './MatchUpdateWithoutMatchPlayersInput.schema';
import { MatchUncheckedUpdateWithoutMatchPlayersInputObjectSchema } from './MatchUncheckedUpdateWithoutMatchPlayersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchUpdateOneRequiredWithoutMatchPlayersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MatchCreateWithoutMatchPlayersInputObjectSchema),
          z.lazy(
            () => MatchUncheckedCreateWithoutMatchPlayersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MatchCreateOrConnectWithoutMatchPlayersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => MatchUpsertWithoutMatchPlayersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MatchWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MatchUpdateWithoutMatchPlayersInputObjectSchema),
          z.lazy(
            () => MatchUncheckedUpdateWithoutMatchPlayersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MatchUpdateOneRequiredWithoutMatchPlayersNestedInputObjectSchema =
  Schema;
