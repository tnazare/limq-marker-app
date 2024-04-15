import { z } from 'zod';
import { MatchPlayerWhereUniqueInputObjectSchema } from './MatchPlayerWhereUniqueInput.schema';
import { MatchPlayerCreateWithoutMusicianInputObjectSchema } from './MatchPlayerCreateWithoutMusicianInput.schema';
import { MatchPlayerUncheckedCreateWithoutMusicianInputObjectSchema } from './MatchPlayerUncheckedCreateWithoutMusicianInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerCreateOrConnectWithoutMusicianInput> =
  z
    .object({
      where: z.lazy(() => MatchPlayerWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MatchPlayerCreateWithoutMusicianInputObjectSchema),
        z.lazy(
          () => MatchPlayerUncheckedCreateWithoutMusicianInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MatchPlayerCreateOrConnectWithoutMusicianInputObjectSchema =
  Schema;
