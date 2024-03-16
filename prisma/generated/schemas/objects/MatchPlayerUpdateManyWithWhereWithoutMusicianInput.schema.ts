import { z } from 'zod';
import { MatchPlayerScalarWhereInputObjectSchema } from './MatchPlayerScalarWhereInput.schema';
import { MatchPlayerUpdateManyMutationInputObjectSchema } from './MatchPlayerUpdateManyMutationInput.schema';
import { MatchPlayerUncheckedUpdateManyWithoutMatchPlayedInputObjectSchema } from './MatchPlayerUncheckedUpdateManyWithoutMatchPlayedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUpdateManyWithWhereWithoutMusicianInput> =
  z
    .object({
      where: z.lazy(() => MatchPlayerScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MatchPlayerUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            MatchPlayerUncheckedUpdateManyWithoutMatchPlayedInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MatchPlayerUpdateManyWithWhereWithoutMusicianInputObjectSchema =
  Schema;
