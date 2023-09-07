/*
  Warnings:

  - You are about to drop the column `isConfirmd` on the `student_semester_registration` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "academic_semesters" ADD COLUMN     "isCurrent" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "student_semester_registration" DROP COLUMN "isConfirmd",
ADD COLUMN     "isConfirmed" BOOLEAN DEFAULT false;
