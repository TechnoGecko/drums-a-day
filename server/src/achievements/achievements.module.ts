import { Module } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { AchievementsResolver } from './achievements.resolver';
import { Achievement } from './entities/achievement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Achievement])],
  providers: [AchievementsResolver, AchievementsService],
})
export class AchievementsModule {}
