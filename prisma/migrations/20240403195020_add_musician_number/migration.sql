/*
  Warnings:

  - A unique constraint covering the columns `[musician_number]` on the table `musicians` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "musicians" ADD COLUMN     "musician_number" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "musicians_musician_number_key" ON "musicians"("musician_number");
