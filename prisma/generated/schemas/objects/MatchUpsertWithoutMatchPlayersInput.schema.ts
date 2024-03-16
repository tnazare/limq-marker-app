import { z } from 'zod';
import { MatchUpdateWithoutMatchPlayersInputObjectSchema } from './MatchUpdateWithoutMatchPlayersInput.schema';
import { MatchUncheckedUpdateWithoutMatchPlayersInputObjectSchema } from './MatchUncheckedUpdateWithoutMatchPlayersInput.schema';
import { MatchCreateWithoutMatchPlayersInputObjectSchema } from './MatchCreateWithoutMatchPlayersInput.schema';
import { MatchUncheckedCreateWithoutMatchPlayersInputObjectSchema } from './MatchUncheckedCreateWithoutMatchPlayersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchUpsertWithoutMatchPlayersInput> = z
  .object({
    update: z.union([
      z.lazy(() => MatchUpdateWithoutMatchPlayersInputObjectSchema),
      z.lazy(() => MatchUncheckedUpdateWithoutMatchPlayersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MatchCreateWithoutMatchPlayersInputObjectSchema),
      z.lazy(() => MatchUncheckedCreateWithoutMatchPlayersInputObjectSchema),
    ]),
  })
  .strict();

export const MatchUpsertWithoutMatchPlayersInputObjectSchema = Schema;
