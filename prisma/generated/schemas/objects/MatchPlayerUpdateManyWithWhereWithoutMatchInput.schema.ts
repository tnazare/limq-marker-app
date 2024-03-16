import { z } from 'zod';
import { MatchPlayerScalarWhereInputObjectSchema } from './MatchPlayerScalarWhereInput.schema';
import { MatchPlayerUpdateManyMutationInputObjectSchema } from './MatchPlayerUpdateManyMutationInput.schema';
import { MatchPlayerUncheckedUpdateManyWithoutMatchPlayersInputObjectSchema } from './MatchPlayerUncheckedUpdateManyWithoutMatchPlayersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUpdateManyWithWhereWithoutMatchInput> =
  z
    .object({
      where: z.lazy(() => MatchPlayerScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MatchPlayerUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            MatchPlayerUncheckedUpdateManyWithoutMatchPlayersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MatchPlayerUpdateManyWithWhereWithoutMatchInputObjectSchema =
  Schema;
