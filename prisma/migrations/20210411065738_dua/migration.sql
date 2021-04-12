/*
  Warnings:

  - Added the required column `from` to the `Salary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `Salary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nominal` to the `Salary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `markup` to the `Salary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Salary" ADD COLUMN     "from" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "to" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "nominal" BIGINT NOT NULL,
ADD COLUMN     "markup" INTEGER NOT NULL,
ADD COLUMN     "keterangan" TEXT;
