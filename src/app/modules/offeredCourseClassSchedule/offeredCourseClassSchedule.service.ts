import { OfferedCourseClassSchedule } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: OfferedCourseClassSchedule
): Promise<OfferedCourseClassSchedule> => {
  //

  const alreadyBookedRoomOnDay =
    await prisma.offeredCourseClassSchedule.findMany({
      where: {
        dayOfWeek: data.dayOfWeek,
        room: {
          id: data.roomId,
        },
      },
    });

  const existingSlots = alreadyBookedRoomOnDay.map(schedule => ({
    startTime: schedule.startTime,
    endTime: schedule.endTime,
    dayOfWeek: schedule.dayOfWeek,
  }));

  const newSlot = {
    startTime: data.startTime,
    endTime: data.endTime,
    dayOfWeek: data.dayOfWeek,
  };

  for (const slot of existingSlots) {
    const existingStart = new Date(`1970-01-01${slot.startTime}: 00`);
    const existingEnd = new Date(`1970-01-01${slot.endTime}: 00`);
    const newStartTime = new Date(`1970-01-01${newSlot.startTime}: 00`);
    const newEndTime = new Date(`1970-01-01${newSlot.endTime}: 00`);
  }

  // result ======
  const result = await prisma.offeredCourseClassSchedule.create({
    data,
    include: {
      offeredCourseSection: true,
      semesterRegistration: true,
      faculty: true,
      room: true,
    },
  });

  return result;
};

export const OfferedCourseClassScheduleService = {
  insertIntoDB,
};
