import { z } from 'zod';
import { MatchPlayerWhereUniqueInputObjectSchema } from './MatchPlayerWhereUniqueInput.schema';
import { MatchPlayerUpdateWithoutMusicianInputObjectSchema } from './MatchPlayerUpdateWithoutMusicianInput.schema';
import { MatchPlayerUncheckedUpdateWithoutMusicianInputObjectSchema } from './MatchPlayerUncheckedUpdateWithoutMusicianInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUpdateWithWhereUniqueWithoutMusicianInput> =
  z
    .object({
      where: z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MatchPlayerUpdateWithoutMusicianInputObjectSchema),
        z.lazy(
          () => MatchPlayerUncheckedUpdateWithoutMusicianInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MatchPlayerUpdateWithWhereUniqueWithoutMusicianInputObjectSchema =
  Schema;
