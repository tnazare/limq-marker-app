import { z } from 'zod';
import { MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchCreateWithoutMatchPlayersInputObjectSchema } from './MatchCreateWithoutMatchPlayersInput.schema';
import { MatchUncheckedCreateWithoutMatchPlayersInputObjectSchema } from './MatchUncheckedCreateWithoutMatchPlayersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchCreateOrConnectWithoutMatchPlayersInput> = z
  .object({
    where: z.lazy(() => MatchWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MatchCreateWithoutMatchPlayersInputObjectSchema),
      z.lazy(() => MatchUncheckedCreateWithoutMatchPlayersInputObjectSchema),
    ]),
  })
  .strict();

export const MatchCreateOrConnectWithoutMatchPlayersInputObjectSchema = Schema;
