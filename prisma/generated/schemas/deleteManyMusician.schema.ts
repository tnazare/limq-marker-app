import { z } from 'zod';
import { MusicianWhereInputObjectSchema } from './objects/MusicianWhereInput.schema';

export const MusicianDeleteManySchema = z.object({
  where: MusicianWhereInputObjectSchema.optional(),
});
