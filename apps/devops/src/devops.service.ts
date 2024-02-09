import { Injectable } from '@nestjs/common';

@Injectable()
export class DevopsService {
  getHello(): string {
    return 'my name is devops5';
  }
}
