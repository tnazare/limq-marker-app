import { z } from 'zod';
import { MatchPlayerUpdateInputObjectSchema } from './objects/MatchPlayerUpdateInput.schema';
import { MatchPlayerUncheckedUpdateInputObjectSchema } from './objects/MatchPlayerUncheckedUpdateInput.schema';
import { MatchPlayerWhereUniqueInputObjectSchema } from './objects/MatchPlayerWhereUniqueInput.schema';

export const MatchPlayerUpdateOneSchema = z.object({
  data: z.union([
    MatchPlayerUpdateInputObjectSchema,
    MatchPlayerUncheckedUpdateInputObjectSchema,
  ]),
  where: MatchPlayerWhereUniqueInputObjectSchema,
});
