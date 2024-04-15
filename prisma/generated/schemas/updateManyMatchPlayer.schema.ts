import { z } from 'zod';
import { MatchPlayerUpdateManyMutationInputObjectSchema } from './objects/MatchPlayerUpdateManyMutationInput.schema';
import { MatchPlayerWhereInputObjectSchema } from './objects/MatchPlayerWhereInput.schema';

export const MatchPlayerUpdateManySchema = z.object({
  data: MatchPlayerUpdateManyMutationInputObjectSchema,
  where: MatchPlayerWhereInputObjectSchema.optional(),
});
