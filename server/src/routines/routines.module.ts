import { Module } from '@nestjs/common';
import { RoutinesService } from './routines.service';
import { RoutinesResolver } from './routines.resolver';

@Module({
  providers: [RoutinesResolver, RoutinesService]
})
export class RoutinesModule {}
