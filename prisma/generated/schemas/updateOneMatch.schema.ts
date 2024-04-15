import { z } from 'zod';
import { MatchUpdateInputObjectSchema } from './objects/MatchUpdateInput.schema';
import { MatchUncheckedUpdateInputObjectSchema } from './objects/MatchUncheckedUpdateInput.schema';
import { MatchWhereUniqueInputObjectSchema } from './objects/MatchWhereUniqueInput.schema';

export const MatchUpdateOneSchema = z.object({
  data: z.union([
    MatchUpdateInputObjectSchema,
    MatchUncheckedUpdateInputObjectSchema,
  ]),
  where: MatchWhereUniqueInputObjectSchema,
});
