import { z } from 'zod';
import { MatchPlayerOrderByWithRelationInputObjectSchema } from './objects/MatchPlayerOrderByWithRelationInput.schema';
import { MatchPlayerWhereInputObjectSchema } from './objects/MatchPlayerWhereInput.schema';
import { MatchPlayerWhereUniqueInputObjectSchema } from './objects/MatchPlayerWhereUniqueInput.schema';
import { MatchPlayerScalarFieldEnumSchema } from './enums/MatchPlayerScalarFieldEnum.schema';

export const MatchPlayerFindManySchema = z.object({
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
  distinct: z.array(MatchPlayerScalarFieldEnumSchema).optional(),
});
