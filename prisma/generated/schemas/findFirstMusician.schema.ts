import { z } from 'zod';
import { MusicianOrderByWithRelationInputObjectSchema } from './objects/MusicianOrderByWithRelationInput.schema';
import { MusicianWhereInputObjectSchema } from './objects/MusicianWhereInput.schema';
import { MusicianWhereUniqueInputObjectSchema } from './objects/MusicianWhereUniqueInput.schema';
import { MusicianScalarFieldEnumSchema } from './enums/MusicianScalarFieldEnum.schema';

export const MusicianFindFirstSchema = z.object({
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
  distinct: z.array(MusicianScalarFieldEnumSchema).optional(),
});
