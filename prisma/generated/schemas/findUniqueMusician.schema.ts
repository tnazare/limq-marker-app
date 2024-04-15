import { z } from 'zod';
import { MusicianWhereUniqueInputObjectSchema } from './objects/MusicianWhereUniqueInput.schema';

export const MusicianFindUniqueSchema = z.object({
  where: MusicianWhereUniqueInputObjectSchema,
});
