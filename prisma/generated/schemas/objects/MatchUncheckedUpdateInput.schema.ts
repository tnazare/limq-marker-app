import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MatchPlayerUncheckedUpdateManyWithoutMatchNestedInputObjectSchema } from './MatchPlayerUncheckedUpdateManyWithoutMatchNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    date: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    matchPlayerId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    matchPlayers: z
      .lazy(
        () => MatchPlayerUncheckedUpdateManyWithoutMatchNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MatchUncheckedUpdateInputObjectSchema = Schema;
