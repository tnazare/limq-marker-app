import { z } from 'zod';
import { MatchPlayerWhereUniqueInputObjectSchema } from './objects/MatchPlayerWhereUniqueInput.schema';

export const MatchPlayerDeleteOneSchema = z.object({
  where: MatchPlayerWhereUniqueInputObjectSchema,
});
