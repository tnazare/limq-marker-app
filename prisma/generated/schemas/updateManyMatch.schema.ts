import { z } from 'zod';
import { MatchUpdateManyMutationInputObjectSchema } from './objects/MatchUpdateManyMutationInput.schema';
import { MatchWhereInputObjectSchema } from './objects/MatchWhereInput.schema';

export const MatchUpdateManySchema = z.object({
  data: MatchUpdateManyMutationInputObjectSchema,
  where: MatchWhereInputObjectSchema.optional(),
});
