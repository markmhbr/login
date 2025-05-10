import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://booster:booster.id@profil-booster.iyue6sn.mongodb.net/'),
    AuthModule,
  ],
})
export class AppModule {}
