import { z } from 'zod';
import { MatchWhereInputObjectSchema } from './objects/MatchWhereInput.schema';

export const MatchDeleteManySchema = z.object({
  where: MatchWhereInputObjectSchema.optional(),
});
