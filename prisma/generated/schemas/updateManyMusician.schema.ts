import { z } from 'zod';
import { MusicianUpdateManyMutationInputObjectSchema } from './objects/MusicianUpdateManyMutationInput.schema';
import { MusicianWhereInputObjectSchema } from './objects/MusicianWhereInput.schema';

export const MusicianUpdateManySchema = z.object({
  data: MusicianUpdateManyMutationInputObjectSchema,
  where: MusicianWhereInputObjectSchema.optional(),
});
