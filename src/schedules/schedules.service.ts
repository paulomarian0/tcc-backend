import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class SchedulesService {

  constructor(private prisma: PrismaService) { }

  async create(createScheduleDto: CreateScheduleDto) {

    const payload = await this.prisma.schedules.create({
      data: {
        time: createScheduleDto.time,
        produtorId: createScheduleDto.produtorId
      }
    })

    return payload

  }

  findAll() {
    return `This action returns all schedules`;
  }

  async findOne(id: number) {
     const payload = await this.prisma.schedules.findFirstOrThrow({
      where: {
        produtorId: id
      }
     })

     return payload
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
