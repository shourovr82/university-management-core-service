/*
  Warnings:

  - You are about to drop the `buildings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rooms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rooms" DROP CONSTRAINT "rooms_buildingId_fkey";

-- DropTable
DROP TABLE "buildings";

-- DropTable
DROP TABLE "rooms";
