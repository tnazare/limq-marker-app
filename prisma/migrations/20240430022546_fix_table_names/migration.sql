/*
  Warnings:

  - You are about to drop the `improvisations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `matchs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `penalties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `season_teams` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `seasons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ImprovisationPlayer" DROP CONSTRAINT "ImprovisationPlayer_improvisationId_fkey";

-- DropForeignKey
ALTER TABLE "MatchTeam" DROP CONSTRAINT "MatchTeam_matchId_fkey";

-- DropForeignKey
ALTER TABLE "Period" DROP CONSTRAINT "Period_matchId_fkey";

-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_seasonTeamId_fkey";

-- DropForeignKey
ALTER TABLE "_ImprovisationToPerson" DROP CONSTRAINT "_ImprovisationToPerson_A_fkey";

-- DropForeignKey
ALTER TABLE "_PenaltyToPerson" DROP CONSTRAINT "_PenaltyToPerson_A_fkey";

-- DropForeignKey
ALTER TABLE "_analyst" DROP CONSTRAINT "_analyst_A_fkey";

-- DropForeignKey
ALTER TABLE "_line_referee" DROP CONSTRAINT "_line_referee_A_fkey";

-- DropForeignKey
ALTER TABLE "_master_of_ceremony" DROP CONSTRAINT "_master_of_ceremony_A_fkey";

-- DropForeignKey
ALTER TABLE "_referee" DROP CONSTRAINT "_referee_A_fkey";

-- DropForeignKey
ALTER TABLE "_statistician" DROP CONSTRAINT "_statistician_A_fkey";

-- DropForeignKey
ALTER TABLE "improvisations" DROP CONSTRAINT "improvisations_matchId_fkey";

-- DropForeignKey
ALTER TABLE "improvisations" DROP CONSTRAINT "improvisations_matchTeamId_fkey";

-- DropForeignKey
ALTER TABLE "improvisations" DROP CONSTRAINT "improvisations_periodId_fkey";

-- DropForeignKey
ALTER TABLE "matchs" DROP CONSTRAINT "matchs_mvpPersonId_fkey";

-- DropForeignKey
ALTER TABLE "matchs" DROP CONSTRAINT "matchs_secondMvpPersonId_fkey";

-- DropForeignKey
ALTER TABLE "matchs" DROP CONSTRAINT "matchs_thirdMvpPersonId_fkey";

-- DropForeignKey
ALTER TABLE "penalties" DROP CONSTRAINT "penalties_improvisationId_fkey";

-- DropForeignKey
ALTER TABLE "penalties" DROP CONSTRAINT "penalties_matchTeamId_fkey";

-- DropForeignKey
ALTER TABLE "season_teams" DROP CONSTRAINT "season_teams_seasonId_fkey";

-- DropTable
DROP TABLE "improvisations";

-- DropTable
DROP TABLE "matchs";

-- DropTable
DROP TABLE "penalties";

-- DropTable
DROP TABLE "season_teams";

-- DropTable
DROP TABLE "seasons";

-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "number" INTEGER NOT NULL,
    "mvpPersonId" TEXT,
    "secondMvpPersonId" TEXT,
    "thirdMvpPersonId" TEXT,
    "type" "MatchType" NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeasonTeam" (
    "id" TEXT NOT NULL,
    "color" "TeamColor" NOT NULL,
    "name" TEXT NOT NULL,
    "seasonId" TEXT,

    CONSTRAINT "SeasonTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Penalty" (
    "id" TEXT NOT NULL,
    "penalty_scope" "PenaltyScope" NOT NULL,
    "penalty_type" "PenaltyType" NOT NULL,
    "matchTeamId" TEXT NOT NULL,
    "improvisationId" TEXT,

    CONSTRAINT "Penalty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Improvisation" (
    "id" TEXT NOT NULL,
    "improvisation_number" INTEGER NOT NULL,
    "nature" "Nature" NOT NULL,
    "matchTeamId" TEXT,
    "matchId" TEXT,
    "periodId" TEXT,

    CONSTRAINT "Improvisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Season" (
    "id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_seasonTeamId_fkey" FOREIGN KEY ("seasonTeamId") REFERENCES "SeasonTeam"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_mvpPersonId_fkey" FOREIGN KEY ("mvpPersonId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_secondMvpPersonId_fkey" FOREIGN KEY ("secondMvpPersonId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_thirdMvpPersonId_fkey" FOREIGN KEY ("thirdMvpPersonId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Period" ADD CONSTRAINT "Period_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchTeam" ADD CONSTRAINT "MatchTeam_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeasonTeam" ADD CONSTRAINT "SeasonTeam_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penalty" ADD CONSTRAINT "Penalty_matchTeamId_fkey" FOREIGN KEY ("matchTeamId") REFERENCES "MatchTeam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penalty" ADD CONSTRAINT "Penalty_improvisationId_fkey" FOREIGN KEY ("improvisationId") REFERENCES "Improvisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImprovisationPlayer" ADD CONSTRAINT "ImprovisationPlayer_improvisationId_fkey" FOREIGN KEY ("improvisationId") REFERENCES "Improvisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Improvisation" ADD CONSTRAINT "Improvisation_matchTeamId_fkey" FOREIGN KEY ("matchTeamId") REFERENCES "MatchTeam"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Improvisation" ADD CONSTRAINT "Improvisation_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Improvisation" ADD CONSTRAINT "Improvisation_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_referee" ADD CONSTRAINT "_referee_A_fkey" FOREIGN KEY ("A") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_line_referee" ADD CONSTRAINT "_line_referee_A_fkey" FOREIGN KEY ("A") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_statistician" ADD CONSTRAINT "_statistician_A_fkey" FOREIGN KEY ("A") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_master_of_ceremony" ADD CONSTRAINT "_master_of_ceremony_A_fkey" FOREIGN KEY ("A") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_analyst" ADD CONSTRAINT "_analyst_A_fkey" FOREIGN KEY ("A") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PenaltyToPerson" ADD CONSTRAINT "_PenaltyToPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "Penalty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImprovisationToPerson" ADD CONSTRAINT "_ImprovisationToPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "Improvisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
