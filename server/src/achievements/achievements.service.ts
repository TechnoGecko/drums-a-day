import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAchievementInput } from './dto/create-achievement.input';
import { UpdateAchievementInput } from './dto/update-achievement.input';
import { Achievement } from './entities/achievement.entity';

@Injectable()
export class AchievementsService {
  constructor(
    @InjectRepository(Achievement)
    private achievementsRepository: Repository<Achievement>,
  ) {}

  create(createAchievementInput: CreateAchievementInput) {
    return 'This action adds a new achievement';
  }

  async findAll(): Promise<Achievement[]> {
    const achievement = new Achievement();
    achievement.id = 1;
    achievement.name = 'Picked up your sticks!';
    return [achievement];
  }

  findOne(id: number) {
    return `This action returns a #${id} achievement`;
  }

  update(id: number, updateAchievementInput: UpdateAchievementInput) {
    return `This action updates a #${id} achievement`;
  }

  remove(id: number) {
    return `This action removes a #${id} achievement`;
  }
}
