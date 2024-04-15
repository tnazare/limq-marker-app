import { z } from 'zod';
import { MusicianWhereInputObjectSchema } from './objects/MusicianWhereInput.schema';
import { MusicianOrderByWithAggregationInputObjectSchema } from './objects/MusicianOrderByWithAggregationInput.schema';
import { MusicianScalarWhereWithAggregatesInputObjectSchema } from './objects/MusicianScalarWhereWithAggregatesInput.schema';
import { MusicianScalarFieldEnumSchema } from './enums/MusicianScalarFieldEnum.schema';

export const MusicianGroupBySchema = z.object({
  where: MusicianWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MusicianOrderByWithAggregationInputObjectSchema,
      MusicianOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MusicianScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MusicianScalarFieldEnumSchema),
});
