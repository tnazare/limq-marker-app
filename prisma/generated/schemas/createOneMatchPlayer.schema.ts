import { z } from 'zod';
import { MatchPlayerCreateInputObjectSchema } from './objects/MatchPlayerCreateInput.schema';
import { MatchPlayerUncheckedCreateInputObjectSchema } from './objects/MatchPlayerUncheckedCreateInput.schema';

export const MatchPlayerCreateOneSchema = z.object({
  data: z.union([
    MatchPlayerCreateInputObjectSchema,
    MatchPlayerUncheckedCreateInputObjectSchema,
  ]),
});
