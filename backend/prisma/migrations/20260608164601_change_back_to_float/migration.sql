/*
  Warnings:

  - You are about to alter the column `posx` on the `Coordinate` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `posy` on the `Coordinate` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Coordinate" ALTER COLUMN "posx" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "posy" SET DATA TYPE DOUBLE PRECISION;
