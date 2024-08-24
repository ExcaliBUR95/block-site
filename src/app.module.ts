import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AccountService } from './account/account.service';
import { AccountController } from './account/account.controller';
import { AccountModule } from './account/account.module';
import { BlockListModule } from './block-list/block-list.module';

@Module({
  imports: [DbModule, AuthModule, UsersModule, AccountModule, BlockListModule],
  controllers: [AppController, AccountController],
  providers: [AppService, AccountService],
})
export class AppModule {}
