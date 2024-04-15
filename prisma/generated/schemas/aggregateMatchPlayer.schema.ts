import { z } from 'zod';
import { MatchPlayerOrderByWithRelationInputObjectSchema } from './objects/MatchPlayerOrderByWithRelationInput.schema';
import { MatchPlayerWhereInputObjectSchema } from './objects/MatchPlayerWhereInput.schema';
import { MatchPlayerWhereUniqueInputObjectSchema } from './objects/MatchPlayerWhereUniqueInput.schema';
import { MatchPlayerCountAggregateInputObjectSchema } from './objects/MatchPlayerCountAggregateInput.schema';
import { MatchPlayerMinAggregateInputObjectSchema } from './objects/MatchPlayerMinAggregateInput.schema';
import { MatchPlayerMaxAggregateInputObjectSchema } from './objects/MatchPlayerMaxAggregateInput.schema';

export const MatchPlayerAggregateSchema = z.object({
  orderBy: z
    .union([
      MatchPlayerOrderByWithRelationInputObjectSchema,
      MatchPlayerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MatchPlayerWhereInputObjectSchema.optional(),
  cursor: MatchPlayerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MatchPlayerCountAggregateInputObjectSchema])
    .optional(),
  _min: MatchPlayerMinAggregateInputObjectSchema.optional(),
  _max: MatchPlayerMaxAggregateInputObjectSchema.optional(),
});
