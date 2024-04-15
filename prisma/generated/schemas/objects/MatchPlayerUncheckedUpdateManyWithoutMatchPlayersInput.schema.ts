import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUncheckedUpdateManyWithoutMatchPlayersInput> =
  z
    .object({
      musicianId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const MatchPlayerUncheckedUpdateManyWithoutMatchPlayersInputObjectSchema =
  Schema;
