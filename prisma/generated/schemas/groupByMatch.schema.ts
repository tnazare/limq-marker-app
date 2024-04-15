import { z } from 'zod';
import { MatchWhereInputObjectSchema } from './objects/MatchWhereInput.schema';
import { MatchOrderByWithAggregationInputObjectSchema } from './objects/MatchOrderByWithAggregationInput.schema';
import { MatchScalarWhereWithAggregatesInputObjectSchema } from './objects/MatchScalarWhereWithAggregatesInput.schema';
import { MatchScalarFieldEnumSchema } from './enums/MatchScalarFieldEnum.schema';

export const MatchGroupBySchema = z.object({
  where: MatchWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MatchOrderByWithAggregationInputObjectSchema,
      MatchOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MatchScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MatchScalarFieldEnumSchema),
});
