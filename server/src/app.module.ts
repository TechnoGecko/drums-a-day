import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAccountModule } from './user-account/user-account.module';
import { RoutinesModule } from './routines/routines.module';
import { UserStatsModule } from './user-stats/user-stats.module';
import { AchievementsModule } from './achievements/achievements.module';

@Module({
  imports: [UserAccountModule, RoutinesModule, UserStatsModule, AchievementsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
