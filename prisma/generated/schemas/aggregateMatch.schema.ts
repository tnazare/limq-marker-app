import { z } from 'zod';
import { MatchOrderByWithRelationInputObjectSchema } from './objects/MatchOrderByWithRelationInput.schema';
import { MatchWhereInputObjectSchema } from './objects/MatchWhereInput.schema';
import { MatchWhereUniqueInputObjectSchema } from './objects/MatchWhereUniqueInput.schema';
import { MatchCountAggregateInputObjectSchema } from './objects/MatchCountAggregateInput.schema';
import { MatchMinAggregateInputObjectSchema } from './objects/MatchMinAggregateInput.schema';
import { MatchMaxAggregateInputObjectSchema } from './objects/MatchMaxAggregateInput.schema';

export const MatchAggregateSchema = z.object({
  orderBy: z
    .union([
      MatchOrderByWithRelationInputObjectSchema,
      MatchOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MatchWhereInputObjectSchema.optional(),
  cursor: MatchWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MatchCountAggregateInputObjectSchema])
    .optional(),
  _min: MatchMinAggregateInputObjectSchema.optional(),
  _max: MatchMaxAggregateInputObjectSchema.optional(),
});
