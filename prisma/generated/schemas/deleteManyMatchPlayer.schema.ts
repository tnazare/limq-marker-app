import { z } from 'zod';
import { MatchPlayerWhereInputObjectSchema } from './objects/MatchPlayerWhereInput.schema';

export const MatchPlayerDeleteManySchema = z.object({
  where: MatchPlayerWhereInputObjectSchema.optional(),
});
