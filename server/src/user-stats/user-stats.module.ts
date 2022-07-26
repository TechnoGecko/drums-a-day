import { Module } from '@nestjs/common';
import { UserStatsService } from './user-stats.service';
import { UserStatsResolver } from './user-stats.resolver';

@Module({
  providers: [UserStatsResolver, UserStatsService]
})
export class UserStatsModule {}
