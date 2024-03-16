import { z } from 'zod';
import { MatchPlayerCreateManyInputObjectSchema } from './objects/MatchPlayerCreateManyInput.schema';

export const MatchPlayerCreateManySchema = z.object({
  data: z.union([
    MatchPlayerCreateManyInputObjectSchema,
    z.array(MatchPlayerCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
