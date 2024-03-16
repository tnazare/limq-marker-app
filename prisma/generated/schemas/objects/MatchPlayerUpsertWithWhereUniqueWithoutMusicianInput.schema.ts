import { z } from 'zod';
import { MatchPlayerWhereUniqueInputObjectSchema } from './MatchPlayerWhereUniqueInput.schema';
import { MatchPlayerUpdateWithoutMusicianInputObjectSchema } from './MatchPlayerUpdateWithoutMusicianInput.schema';
import { MatchPlayerUncheckedUpdateWithoutMusicianInputObjectSchema } from './MatchPlayerUncheckedUpdateWithoutMusicianInput.schema';
import { MatchPlayerCreateWithoutMusicianInputObjectSchema } from './MatchPlayerCreateWithoutMusicianInput.schema';
import { MatchPlayerUncheckedCreateWithoutMusicianInputObjectSchema } from './MatchPlayerUncheckedCreateWithoutMusicianInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUpsertWithWhereUniqueWithoutMusicianInput> =
  z
    .object({
      where: z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MatchPlayerUpdateWithoutMusicianInputObjectSchema),
        z.lazy(
          () => MatchPlayerUncheckedUpdateWithoutMusicianInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MatchPlayerCreateWithoutMusicianInputObjectSchema),
        z.lazy(
          () => MatchPlayerUncheckedCreateWithoutMusicianInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MatchPlayerUpsertWithWhereUniqueWithoutMusicianInputObjectSchema =
  Schema;
