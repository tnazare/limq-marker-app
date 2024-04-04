import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicianCreateManyInput> = z
  .object({
    id: z.string().optional(),
    firstName: z.string(),
    lastName: z.string(),
    shortDescription: z.string().optional().nullable(),
    biography: z.string().optional().nullable(),
    musicianNumber: z.number().optional().nullable(),
  })
  .strict();

export const MusicianCreateManyInputObjectSchema = Schema;
