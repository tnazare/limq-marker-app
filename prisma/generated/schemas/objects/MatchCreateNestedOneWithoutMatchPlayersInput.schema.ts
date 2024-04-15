import { z } from 'zod';
import { MatchCreateWithoutMatchPlayersInputObjectSchema } from './MatchCreateWithoutMatchPlayersInput.schema';
import { MatchUncheckedCreateWithoutMatchPlayersInputObjectSchema } from './MatchUncheckedCreateWithoutMatchPlayersInput.schema';
import { MatchCreateOrConnectWithoutMatchPlayersInputObjectSchema } from './MatchCreateOrConnectWithoutMatchPlayersInput.schema';
import { MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchCreateNestedOneWithoutMatchPlayersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MatchCreateWithoutMatchPlayersInputObjectSchema),
        z.lazy(() => MatchUncheckedCreateWithoutMatchPlayersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => MatchCreateOrConnectWithoutMatchPlayersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => MatchWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MatchCreateNestedOneWithoutMatchPlayersInputObjectSchema = Schema;
