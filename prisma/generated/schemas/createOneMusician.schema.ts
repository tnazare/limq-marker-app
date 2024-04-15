import { z } from 'zod';
import { MusicianCreateInputObjectSchema } from './objects/MusicianCreateInput.schema';
import { MusicianUncheckedCreateInputObjectSchema } from './objects/MusicianUncheckedCreateInput.schema';

export const MusicianCreateOneSchema = z.object({
  data: z.union([
    MusicianCreateInputObjectSchema,
    MusicianUncheckedCreateInputObjectSchema,
  ]),
});
