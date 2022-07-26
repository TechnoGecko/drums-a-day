import { Test, TestingModule } from '@nestjs/testing';
import { AchievementsResolver } from './achievements.resolver';
import { AchievementsService } from './achievements.service';

describe('AchievementsResolver', () => {
  let resolver: AchievementsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AchievementsResolver, AchievementsService],
    }).compile();

    resolver = module.get<AchievementsResolver>(AchievementsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
