/*
  Warnings:

  - You are about to alter the column `posx` on the `Coordinate` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `posy` on the `Coordinate` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "Coordinate" ALTER COLUMN "posx" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "posy" SET DATA TYPE DECIMAL(65,30);
