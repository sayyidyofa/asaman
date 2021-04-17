/*
  Warnings:

  - You are about to drop the column `count` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `count` on the `Welding` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `Welding` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "count",
ADD COLUMN     "amount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "time" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Welding" DROP COLUMN "count",
ADD COLUMN     "amount" INTEGER NOT NULL;
