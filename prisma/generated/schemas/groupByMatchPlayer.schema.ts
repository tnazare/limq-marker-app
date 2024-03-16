import { z } from 'zod';
import { MatchPlayerWhereInputObjectSchema } from './objects/MatchPlayerWhereInput.schema';
import { MatchPlayerOrderByWithAggregationInputObjectSchema } from './objects/MatchPlayerOrderByWithAggregationInput.schema';
import { MatchPlayerScalarWhereWithAggregatesInputObjectSchema } from './objects/MatchPlayerScalarWhereWithAggregatesInput.schema';
import { MatchPlayerScalarFieldEnumSchema } from './enums/MatchPlayerScalarFieldEnum.schema';

export const MatchPlayerGroupBySchema = z.object({
  where: MatchPlayerWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MatchPlayerOrderByWithAggregationInputObjectSchema,
      MatchPlayerOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MatchPlayerScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MatchPlayerScalarFieldEnumSchema),
});
