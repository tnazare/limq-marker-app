import type {Prisma} from '@prisma/client';

export const seasonSelector = {
  id: true,
  label: true,
  startDate: true,
} satisfies Prisma.SeasonSelect;

export const seasonWithMatchesAndTeamsSelector = {
  id: true,
  label: true,
  startDate: true,
  teams: true,
  matches: true
} satisfies Prisma.SeasonSelect;
