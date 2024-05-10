/*
  Warnings:

  - You are about to drop the column `is_ex_aequo` on the `improvisations` table. All the data in the column will be lost.
  - You are about to drop the column `period` on the `improvisations` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `improvisations` table. All the data in the column will be lost.
  - You are about to drop the column `matchPlayerId` on the `matchs` table. All the data in the column will be lost.
  - You are about to drop the column `seasonId` on the `matchs` table. All the data in the column will be lost.
  - You are about to drop the column `musicianId` on the `penalties` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `penalties` table. All the data in the column will be lost.
  - You are about to drop the `ImprovisationPlayerLeft` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ImprovisationPlayerRight` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MatchPlayer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Season` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `musicians` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teams` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `number` to the `matchs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `matchs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matchTeamId` to the `penalties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `penalty_scope` to the `penalties` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PersonType" AS ENUM ('REGULAR', 'MUSICIAN');

-- CreateEnum
CREATE TYPE "MatchType" AS ENUM ('REGULAR', 'SEMI_FINAL', 'FINAL', 'EXCEPTIONAL');

-- CreateEnum
CREATE TYPE "TeamPosition" AS ENUM ('LEFT', 'RIGHT');

-- CreateEnum
CREATE TYPE "PenaltyScope" AS ENUM ('TEAM', 'MUSICIAN');

-- DropForeignKey
ALTER TABLE "ImprovisationPlayerLeft" DROP CONSTRAINT "ImprovisationPlayerLeft_improvisationId_fkey";

-- DropForeignKey
ALTER TABLE "ImprovisationPlayerLeft" DROP CONSTRAINT "ImprovisationPlayerLeft_musicianId_fkey";

-- DropForeignKey
ALTER TABLE "ImprovisationPlayerRight" DROP CONSTRAINT "ImprovisationPlayerRight_improvisationId_fkey";

-- DropForeignKey
ALTER TABLE "ImprovisationPlayerRight" DROP CONSTRAINT "ImprovisationPlayerRight_musicianId_fkey";

-- DropForeignKey
ALTER TABLE "MatchPlayer" DROP CONSTRAINT "MatchPlayer_matchId_fkey";

-- DropForeignKey
ALTER TABLE "MatchPlayer" DROP CONSTRAINT "MatchPlayer_musicianId_fkey";

-- DropForeignKey
ALTER TABLE "improvisations" DROP CONSTRAINT "improvisations_teamId_fkey";

-- DropForeignKey
ALTER TABLE "matchs" DROP CONSTRAINT "matchs_seasonId_fkey";

-- DropForeignKey
ALTER TABLE "musicians" DROP CONSTRAINT "musicians_teamId_fkey";

-- DropForeignKey
ALTER TABLE "penalties" DROP CONSTRAINT "penalties_improvisationId_fkey";

-- DropForeignKey
ALTER TABLE "penalties" DROP CONSTRAINT "penalties_musicianId_fkey";

-- DropForeignKey
ALTER TABLE "penalties" DROP CONSTRAINT "penalties_teamId_fkey";

-- DropForeignKey
ALTER TABLE "teams" DROP CONSTRAINT "teams_seasonId_fkey";

-- AlterTable
ALTER TABLE "improvisations" DROP COLUMN "is_ex_aequo",
DROP COLUMN "period",
DROP COLUMN "teamId",
ADD COLUMN     "matchTeamId" TEXT,
ADD COLUMN     "periodId" TEXT;

-- AlterTable
ALTER TABLE "matchs" DROP COLUMN "matchPlayerId",
DROP COLUMN "seasonId",
ADD COLUMN     "mvpPersonId" TEXT,
ADD COLUMN     "number" INTEGER NOT NULL,
ADD COLUMN     "secondMvpPersonId" TEXT,
ADD COLUMN     "thirdMvpPersonId" TEXT,
ADD COLUMN     "type" "MatchType" NOT NULL;

-- AlterTable
ALTER TABLE "penalties" DROP COLUMN "musicianId",
DROP COLUMN "teamId",
ADD COLUMN     "matchTeamId" TEXT NOT NULL,
ADD COLUMN     "penalty_scope" "PenaltyScope" NOT NULL,
ALTER COLUMN "improvisationId" DROP NOT NULL;

-- DropTable
DROP TABLE "ImprovisationPlayerLeft";

-- DropTable
DROP TABLE "ImprovisationPlayerRight";

-- DropTable
DROP TABLE "MatchPlayer";

-- DropTable
DROP TABLE "Season";

-- DropTable
DROP TABLE "musicians";

-- DropTable
DROP TABLE "teams";

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "biography" TEXT,
    "short_description" TEXT,
    "musician_number" INTEGER,
    "type" "PersonType" NOT NULL,
    "seasonTeamId" TEXT,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Period" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "matchId" TEXT,

    CONSTRAINT "Period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatchTeam" (
    "id" TEXT NOT NULL,
    "color" "TeamColor" NOT NULL,
    "position" "TeamPosition" NOT NULL,
    "matchId" TEXT,

    CONSTRAINT "MatchTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "season_teams" (
    "id" TEXT NOT NULL,
    "color" "TeamColor" NOT NULL,
    "name" TEXT NOT NULL,
    "seasonId" TEXT,

    CONSTRAINT "season_teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImprovisationPlayer" (
    "id" TEXT NOT NULL,
    "musicianId" TEXT,
    "winner" BOOLEAN NOT NULL,
    "improvisationId" TEXT,

    CONSTRAINT "ImprovisationPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seasons" (
    "id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "seasons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_referee" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_line_referee" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_statistician" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_master_of_ceremony" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_analyst" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MatchTeamToPerson" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PenaltyToPerson" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ImprovisationToPerson" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_musician_number_key" ON "Person"("musician_number");

-- CreateIndex
CREATE UNIQUE INDEX "_referee_AB_unique" ON "_referee"("A", "B");

-- CreateIndex
CREATE INDEX "_referee_B_index" ON "_referee"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_line_referee_AB_unique" ON "_line_referee"("A", "B");

-- CreateIndex
CREATE INDEX "_line_referee_B_index" ON "_line_referee"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_statistician_AB_unique" ON "_statistician"("A", "B");

-- CreateIndex
CREATE INDEX "_statistician_B_index" ON "_statistician"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_master_of_ceremony_AB_unique" ON "_master_of_ceremony"("A", "B");

-- CreateIndex
CREATE INDEX "_master_of_ceremony_B_index" ON "_master_of_ceremony"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_analyst_AB_unique" ON "_analyst"("A", "B");

-- CreateIndex
CREATE INDEX "_analyst_B_index" ON "_analyst"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MatchTeamToPerson_AB_unique" ON "_MatchTeamToPerson"("A", "B");

-- CreateIndex
CREATE INDEX "_MatchTeamToPerson_B_index" ON "_MatchTeamToPerson"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PenaltyToPerson_AB_unique" ON "_PenaltyToPerson"("A", "B");

-- CreateIndex
CREATE INDEX "_PenaltyToPerson_B_index" ON "_PenaltyToPerson"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ImprovisationToPerson_AB_unique" ON "_ImprovisationToPerson"("A", "B");

-- CreateIndex
CREATE INDEX "_ImprovisationToPerson_B_index" ON "_ImprovisationToPerson"("B");

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_seasonTeamId_fkey" FOREIGN KEY ("seasonTeamId") REFERENCES "season_teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matchs" ADD CONSTRAINT "matchs_mvpPersonId_fkey" FOREIGN KEY ("mvpPersonId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matchs" ADD CONSTRAINT "matchs_secondMvpPersonId_fkey" FOREIGN KEY ("secondMvpPersonId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matchs" ADD CONSTRAINT "matchs_thirdMvpPersonId_fkey" FOREIGN KEY ("thirdMvpPersonId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Period" ADD CONSTRAINT "Period_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matchs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchTeam" ADD CONSTRAINT "MatchTeam_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matchs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "season_teams" ADD CONSTRAINT "season_teams_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "seasons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penalties" ADD CONSTRAINT "penalties_matchTeamId_fkey" FOREIGN KEY ("matchTeamId") REFERENCES "MatchTeam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penalties" ADD CONSTRAINT "penalties_improvisationId_fkey" FOREIGN KEY ("improvisationId") REFERENCES "improvisations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImprovisationPlayer" ADD CONSTRAINT "ImprovisationPlayer_musicianId_fkey" FOREIGN KEY ("musicianId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImprovisationPlayer" ADD CONSTRAINT "ImprovisationPlayer_improvisationId_fkey" FOREIGN KEY ("improvisationId") REFERENCES "improvisations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "improvisations" ADD CONSTRAINT "improvisations_matchTeamId_fkey" FOREIGN KEY ("matchTeamId") REFERENCES "MatchTeam"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "improvisations" ADD CONSTRAINT "improvisations_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_referee" ADD CONSTRAINT "_referee_A_fkey" FOREIGN KEY ("A") REFERENCES "matchs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_referee" ADD CONSTRAINT "_referee_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_line_referee" ADD CONSTRAINT "_line_referee_A_fkey" FOREIGN KEY ("A") REFERENCES "matchs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_line_referee" ADD CONSTRAINT "_line_referee_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_statistician" ADD CONSTRAINT "_statistician_A_fkey" FOREIGN KEY ("A") REFERENCES "matchs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_statistician" ADD CONSTRAINT "_statistician_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_master_of_ceremony" ADD CONSTRAINT "_master_of_ceremony_A_fkey" FOREIGN KEY ("A") REFERENCES "matchs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_master_of_ceremony" ADD CONSTRAINT "_master_of_ceremony_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_analyst" ADD CONSTRAINT "_analyst_A_fkey" FOREIGN KEY ("A") REFERENCES "matchs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_analyst" ADD CONSTRAINT "_analyst_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MatchTeamToPerson" ADD CONSTRAINT "_MatchTeamToPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "MatchTeam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MatchTeamToPerson" ADD CONSTRAINT "_MatchTeamToPerson_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PenaltyToPerson" ADD CONSTRAINT "_PenaltyToPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "penalties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PenaltyToPerson" ADD CONSTRAINT "_PenaltyToPerson_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImprovisationToPerson" ADD CONSTRAINT "_ImprovisationToPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "improvisations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImprovisationToPerson" ADD CONSTRAINT "_ImprovisationToPerson_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;
