import { z } from 'zod';

export const MusicianScalarFieldEnumSchema = z.enum([
  'id',
  'firstName',
  'lastName',
  'shortDescription',
  'biography',
]);
