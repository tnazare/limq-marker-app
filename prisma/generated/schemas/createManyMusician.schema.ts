import { z } from 'zod';
import { MusicianCreateManyInputObjectSchema } from './objects/MusicianCreateManyInput.schema';

export const MusicianCreateManySchema = z.object({
  data: z.union([
    MusicianCreateManyInputObjectSchema,
    z.array(MusicianCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
