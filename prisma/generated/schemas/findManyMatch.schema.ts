import { z } from 'zod';
import { MatchOrderByWithRelationInputObjectSchema } from './objects/MatchOrderByWithRelationInput.schema';
import { MatchWhereInputObjectSchema } from './objects/MatchWhereInput.schema';
import { MatchWhereUniqueInputObjectSchema } from './objects/MatchWhereUniqueInput.schema';
import { MatchScalarFieldEnumSchema } from './enums/MatchScalarFieldEnum.schema';

export const MatchFindManySchema = z.object({
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
  distinct: z.array(MatchScalarFieldEnumSchema).optional(),
});
