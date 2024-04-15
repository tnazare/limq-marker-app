import { z } from 'zod';
import { MusicianWhereUniqueInputObjectSchema } from './objects/MusicianWhereUniqueInput.schema';

export const MusicianDeleteOneSchema = z.object({
  where: MusicianWhereUniqueInputObjectSchema,
});
