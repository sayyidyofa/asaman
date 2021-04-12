/*
  Warnings:

  - You are about to alter the column `nominal` on the `Salary` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Salary" ALTER COLUMN "nominal" SET DATA TYPE INTEGER;
