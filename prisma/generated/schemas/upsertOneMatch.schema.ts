import { z } from 'zod';
import { MatchWhereUniqueInputObjectSchema } from './objects/MatchWhereUniqueInput.schema';
import { MatchCreateInputObjectSchema } from './objects/MatchCreateInput.schema';
import { MatchUncheckedCreateInputObjectSchema } from './objects/MatchUncheckedCreateInput.schema';
import { MatchUpdateInputObjectSchema } from './objects/MatchUpdateInput.schema';
import { MatchUncheckedUpdateInputObjectSchema } from './objects/MatchUncheckedUpdateInput.schema';

export const MatchUpsertSchema = z.object({
  where: MatchWhereUniqueInputObjectSchema,
  create: z.union([
    MatchCreateInputObjectSchema,
    MatchUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MatchUpdateInputObjectSchema,
    MatchUncheckedUpdateInputObjectSchema,
  ]),
});
