import { z } from 'zod';
import { MatchCreateManyInputObjectSchema } from './objects/MatchCreateManyInput.schema';

export const MatchCreateManySchema = z.object({
  data: z.union([
    MatchCreateManyInputObjectSchema,
    z.array(MatchCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
