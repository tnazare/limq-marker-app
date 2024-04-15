import { z } from 'zod';

export const MatchScalarFieldEnumSchema = z.enum([
  'id',
  'date',
  'matchPlayerId',
]);
