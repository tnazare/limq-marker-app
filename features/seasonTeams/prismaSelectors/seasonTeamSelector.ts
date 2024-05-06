import type {Prisma} from '@prisma/client';

export const seasonTeamSelector = {
  id: true,
  color: true,
  name: true
} satisfies Prisma.SeasonTeamSelect;