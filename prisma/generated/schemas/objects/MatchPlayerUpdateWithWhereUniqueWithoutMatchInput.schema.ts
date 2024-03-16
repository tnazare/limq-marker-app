import { z } from 'zod';
import { MatchPlayerWhereUniqueInputObjectSchema } from './MatchPlayerWhereUniqueInput.schema';
import { MatchPlayerUpdateWithoutMatchInputObjectSchema } from './MatchPlayerUpdateWithoutMatchInput.schema';
import { MatchPlayerUncheckedUpdateWithoutMatchInputObjectSchema } from './MatchPlayerUncheckedUpdateWithoutMatchInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUpdateWithWhereUniqueWithoutMatchInput> =
  z
    .object({
      where: z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MatchPlayerUpdateWithoutMatchInputObjectSchema),
        z.lazy(() => MatchPlayerUncheckedUpdateWithoutMatchInputObjectSchema),
      ]),
    })
    .strict();

export const MatchPlayerUpdateWithWhereUniqueWithoutMatchInputObjectSchema =
  Schema;
