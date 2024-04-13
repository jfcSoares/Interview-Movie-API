import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware { //Middleware class for logging HTTP requests

  private logger = new Logger(`HTTP`);
  use(req: Request, res: Response, next: NextFunction) { //Simple logging message, can be changed
    this.logger.log(`Logging HTTP request ${req.method} ${req.url} ${res.statusCode}`,);
    next();
  }
}

