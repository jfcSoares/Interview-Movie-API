import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MoviesModule } from './movies/movies.module';
import { GenresModule } from './genres/genres.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [PrismaModule, MoviesModule, GenresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }}
