import { Test, TestingModule } from '@nestjs/testing';
import { UserStatsResolver } from './user-stats.resolver';
import { UserStatsService } from './user-stats.service';

describe('UserStatsResolver', () => {
  let resolver: UserStatsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserStatsResolver, UserStatsService],
    }).compile();

    resolver = module.get<UserStatsResolver>(UserStatsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
