import { Module } from '@nestjs/common';
import { UserAccountService } from './user-account.service';
import { UserAccountResolver } from './user-account.resolver';

@Module({
  providers: [UserAccountResolver, UserAccountService]
})
export class UserAccountModule {}
