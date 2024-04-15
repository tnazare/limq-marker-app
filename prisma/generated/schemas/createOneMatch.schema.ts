import { z } from 'zod';
import { MatchCreateInputObjectSchema } from './objects/MatchCreateInput.schema';
import { MatchUncheckedCreateInputObjectSchema } from './objects/MatchUncheckedCreateInput.schema';

export const MatchCreateOneSchema = z.object({
  data: z.union([
    MatchCreateInputObjectSchema,
    MatchUncheckedCreateInputObjectSchema,
  ]),
});
