import { z } from 'zod';
import { MatchPlayerWhereUniqueInputObjectSchema } from './MatchPlayerWhereUniqueInput.schema';
import { MatchPlayerUpdateWithoutMatchInputObjectSchema } from './MatchPlayerUpdateWithoutMatchInput.schema';
import { MatchPlayerUncheckedUpdateWithoutMatchInputObjectSchema } from './MatchPlayerUncheckedUpdateWithoutMatchInput.schema';
import { MatchPlayerCreateWithoutMatchInputObjectSchema } from './MatchPlayerCreateWithoutMatchInput.schema';
import { MatchPlayerUncheckedCreateWithoutMatchInputObjectSchema } from './MatchPlayerUncheckedCreateWithoutMatchInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUpsertWithWhereUniqueWithoutMatchInput> =
  z
    .object({
      where: z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MatchPlayerUpdateWithoutMatchInputObjectSchema),
        z.lazy(() => MatchPlayerUncheckedUpdateWithoutMatchInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MatchPlayerCreateWithoutMatchInputObjectSchema),
        z.lazy(() => MatchPlayerUncheckedCreateWithoutMatchInputObjectSchema),
      ]),
    })
    .strict();

export const MatchPlayerUpsertWithWhereUniqueWithoutMatchInputObjectSchema =
  Schema;
