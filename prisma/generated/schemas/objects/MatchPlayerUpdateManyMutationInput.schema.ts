import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MatchPlayerUpdateManyMutationInput> = z
  .object({})
  .strict();

export const MatchPlayerUpdateManyMutationInputObjectSchema = Schema;
