import { z } from 'zod';
import { MatchWhereUniqueInputObjectSchema } from './objects/MatchWhereUniqueInput.schema';

export const MatchDeleteOneSchema = z.object({
  where: MatchWhereUniqueInputObjectSchema,
});
