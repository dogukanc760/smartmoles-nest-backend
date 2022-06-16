import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvironmentIterator {
  serverIp: string[] = [/* konsept 1  */ '123123', '123123'];

  getServerIP() {
    return this.serverIp;
  }
}
