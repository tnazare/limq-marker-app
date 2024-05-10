-- CreateEnum
CREATE TYPE "TeamColor" AS ENUM ('BLUE', 'GREEN', 'RED', 'YELLOW');

-- CreateEnum
CREATE TYPE "Nature" AS ENUM ('COMPARED', 'MIXED');

-- CreateEnum
CREATE TYPE "PenaltyType" AS ENUM ('FAILURE_TO_COMPLY_TO_THE_CARD', 'GAME_DELAY', 'HAMMING', 'ILLEGAL_PROCEDURE', 'OTHER');

-- AlterTable
ALTER TABLE "matchs" ADD COLUMN     "seasonId" TEXT;

-- AlterTable
ALTER TABLE "musicians" ADD COLUMN     "teamId" TEXT;

-- CreateTable
CREATE TABLE "teams" (
    "id" TEXT NOT NULL,
    "color" "TeamColor" NOT NULL,
    "name" TEXT NOT NULL,
    "seasonId" TEXT,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "penalties" (
    "id" TEXT NOT NULL,
    "penalty_type" "PenaltyType" NOT NULL,
    "improvisationId" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "musicianId" TEXT NOT NULL,

    CONSTRAINT "penalties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImprovisationPlayerLeft" (
    "improvisationId" TEXT NOT NULL,
    "musicianId" TEXT NOT NULL,

    CONSTRAINT "ImprovisationPlayerLeft_pkey" PRIMARY KEY ("improvisationId","musicianId")
);

-- CreateTable
CREATE TABLE "ImprovisationPlayerRight" (
    "improvisationId" TEXT NOT NULL,
    "musicianId" TEXT NOT NULL,

    CONSTRAINT "ImprovisationPlayerRight_pkey" PRIMARY KEY ("improvisationId","musicianId")
);

-- CreateTable
CREATE TABLE "improvisations" (
    "id" TEXT NOT NULL,
    "period" INTEGER NOT NULL,
    "improvisation_number" INTEGER NOT NULL,
    "nature" "Nature" NOT NULL,
    "is_ex_aequo" BOOLEAN NOT NULL,
    "matchId" TEXT,
    "teamId" TEXT NOT NULL,

    CONSTRAINT "improvisations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Season" (
    "id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "musicians" ADD CONSTRAINT "musicians_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matchs" ADD CONSTRAINT "matchs_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penalties" ADD CONSTRAINT "penalties_improvisationId_fkey" FOREIGN KEY ("improvisationId") REFERENCES "improvisations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penalties" ADD CONSTRAINT "penalties_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penalties" ADD CONSTRAINT "penalties_musicianId_fkey" FOREIGN KEY ("musicianId") REFERENCES "musicians"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImprovisationPlayerLeft" ADD CONSTRAINT "ImprovisationPlayerLeft_improvisationId_fkey" FOREIGN KEY ("improvisationId") REFERENCES "improvisations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImprovisationPlayerLeft" ADD CONSTRAINT "ImprovisationPlayerLeft_musicianId_fkey" FOREIGN KEY ("musicianId") REFERENCES "musicians"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImprovisationPlayerRight" ADD CONSTRAINT "ImprovisationPlayerRight_improvisationId_fkey" FOREIGN KEY ("improvisationId") REFERENCES "improvisations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImprovisationPlayerRight" ADD CONSTRAINT "ImprovisationPlayerRight_musicianId_fkey" FOREIGN KEY ("musicianId") REFERENCES "musicians"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "improvisations" ADD CONSTRAINT "improvisations_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "improvisations" ADD CONSTRAINT "improvisations_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matchs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
