import type {Prisma} from '@prisma/client';

export const musicianSelector = {
  id: true,
  firstName: true,
  lastName: true,
  shortDescription: true,
  biography: true,
  musicianNumber: true,
  type: true,
} satisfies Prisma.PersonSelect;
