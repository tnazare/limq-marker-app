import { z } from 'zod';
import { MusicianOrderByWithRelationInputObjectSchema } from './objects/MusicianOrderByWithRelationInput.schema';
import { MusicianWhereInputObjectSchema } from './objects/MusicianWhereInput.schema';
import { MusicianWhereUniqueInputObjectSchema } from './objects/MusicianWhereUniqueInput.schema';
import { MusicianCountAggregateInputObjectSchema } from './objects/MusicianCountAggregateInput.schema';
import { MusicianMinAggregateInputObjectSchema } from './objects/MusicianMinAggregateInput.schema';
import { MusicianMaxAggregateInputObjectSchema } from './objects/MusicianMaxAggregateInput.schema';
import { MusicianAvgAggregateInputObjectSchema } from './objects/MusicianAvgAggregateInput.schema';
import { MusicianSumAggregateInputObjectSchema } from './objects/MusicianSumAggregateInput.schema';

export const MusicianAggregateSchema = z.object({
  orderBy: z
    .union([
      MusicianOrderByWithRelationInputObjectSchema,
      MusicianOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MusicianWhereInputObjectSchema.optional(),
  cursor: MusicianWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MusicianCountAggregateInputObjectSchema])
    .optional(),
  _min: MusicianMinAggregateInputObjectSchema.optional(),
  _max: MusicianMaxAggregateInputObjectSchema.optional(),
  _avg: MusicianAvgAggregateInputObjectSchema.optional(),
  _sum: MusicianSumAggregateInputObjectSchema.optional(),
});
