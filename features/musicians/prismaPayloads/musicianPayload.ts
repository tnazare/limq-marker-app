import type {Prisma} from '@prisma/client';
import type {musicianSelector} from "@/features/musicians/prismaSelectors/musicianSelector";

export type MusicianPayload = Prisma.PersonGetPayload<{ select: typeof musicianSelector }>;
