import { z } from 'zod';
import { MatchPlayerWhereUniqueInputObjectSchema } from './objects/MatchPlayerWhereUniqueInput.schema';

export const MatchPlayerFindUniqueSchema = z.object({
  where: MatchPlayerWhereUniqueInputObjectSchema,
});
