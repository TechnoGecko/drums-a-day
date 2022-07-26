import { Injectable } from '@nestjs/common';
import { CreateRoutineInput } from './dto/create-routine.input';
import { UpdateRoutineInput } from './dto/update-routine.input';

@Injectable()
export class RoutinesService {
  create(createRoutineInput: CreateRoutineInput) {
    return 'This action adds a new routine';
  }

  findAll() {
    return `This action returns all routines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} routine`;
  }

  update(id: number, updateRoutineInput: UpdateRoutineInput) {
    return `This action updates a #${id} routine`;
  }

  remove(id: number) {
    return `This action removes a #${id} routine`;
  }
}
