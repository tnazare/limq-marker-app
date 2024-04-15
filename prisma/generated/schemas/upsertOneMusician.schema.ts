import { z } from 'zod';
import { MusicianWhereUniqueInputObjectSchema } from './objects/MusicianWhereUniqueInput.schema';
import { MusicianCreateInputObjectSchema } from './objects/MusicianCreateInput.schema';
import { MusicianUncheckedCreateInputObjectSchema } from './objects/MusicianUncheckedCreateInput.schema';
import { MusicianUpdateInputObjectSchema } from './objects/MusicianUpdateInput.schema';
import { MusicianUncheckedUpdateInputObjectSchema } from './objects/MusicianUncheckedUpdateInput.schema';

export const MusicianUpsertSchema = z.object({
  where: MusicianWhereUniqueInputObjectSchema,
  create: z.union([
    MusicianCreateInputObjectSchema,
    MusicianUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MusicianUpdateInputObjectSchema,
    MusicianUncheckedUpdateInputObjectSchema,
  ]),
});
