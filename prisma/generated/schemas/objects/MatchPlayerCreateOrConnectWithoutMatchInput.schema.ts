import { z } from 'zod';
import { MatchPlayerWhereUniqueInputObjectSchema } from './MatchPlayerWhereUniqueInput.schema';
import { MatchPlayerCreateWithoutMatchInputObjectSchema } from './MatchPlayerCreateWithoutMatchInput.schema';
import { MatchPlayerUncheckedCreateWithoutMatchInputObjectSchema } from './MatchPlayerUncheckedCreateWithoutMatchInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerCreateOrConnectWithoutMatchInput> = z
  .object({
    where: z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MatchPlayerCreateWithoutMatchInputObjectSchema),
      z.lazy(() => MatchPlayerUncheckedCreateWithoutMatchInputObjectSchema),
    ]),
  })
  .strict();

export const MatchPlayerCreateOrConnectWithoutMatchInputObjectSchema = Schema;
