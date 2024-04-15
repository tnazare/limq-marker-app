import { z } from 'zod';
import { MatchWhereUniqueInputObjectSchema } from './objects/MatchWhereUniqueInput.schema';

export const MatchFindUniqueSchema = z.object({
  where: MatchWhereUniqueInputObjectSchema,
});
