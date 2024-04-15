import { z } from 'zod';
import { MusicianUpdateInputObjectSchema } from './objects/MusicianUpdateInput.schema';
import { MusicianUncheckedUpdateInputObjectSchema } from './objects/MusicianUncheckedUpdateInput.schema';
import { MusicianWhereUniqueInputObjectSchema } from './objects/MusicianWhereUniqueInput.schema';

export const MusicianUpdateOneSchema = z.object({
  data: z.union([
    MusicianUpdateInputObjectSchema,
    MusicianUncheckedUpdateInputObjectSchema,
  ]),
  where: MusicianWhereUniqueInputObjectSchema,
});
