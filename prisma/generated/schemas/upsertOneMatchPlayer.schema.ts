import { z } from 'zod';
import { MatchPlayerWhereUniqueInputObjectSchema } from './objects/MatchPlayerWhereUniqueInput.schema';
import { MatchPlayerCreateInputObjectSchema } from './objects/MatchPlayerCreateInput.schema';
import { MatchPlayerUncheckedCreateInputObjectSchema } from './objects/MatchPlayerUncheckedCreateInput.schema';
import { MatchPlayerUpdateInputObjectSchema } from './objects/MatchPlayerUpdateInput.schema';
import { MatchPlayerUncheckedUpdateInputObjectSchema } from './objects/MatchPlayerUncheckedUpdateInput.schema';

export const MatchPlayerUpsertSchema = z.object({
  where: MatchPlayerWhereUniqueInputObjectSchema,
  create: z.union([
    MatchPlayerCreateInputObjectSchema,
    MatchPlayerUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MatchPlayerUpdateInputObjectSchema,
    MatchPlayerUncheckedUpdateInputObjectSchema,
  ]),
});
