import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://miftaalfareza:markmhbr4525@cluster0.rdi2n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    AuthModule,
  ],
})
export class AppModule {}
