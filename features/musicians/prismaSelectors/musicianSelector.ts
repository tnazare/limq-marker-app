import type { Prisma } from '@prisma/client';

export const musicianSelector = {
  id: true,
  firstName: true,
  lastName: true,
  shortDescription: true,
  biography: true,
} satisfies Prisma.MusicianSelect;
