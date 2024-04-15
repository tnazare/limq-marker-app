import type {Prisma} from '@prisma/client';

export const teamSelector = {
  id: true,
  name: true,
  color: true,
  members: true,
} satisfies Prisma.TeamSelect;
