import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TestFunc {
  private readonly logger = new Logger(TestFunc.name);
  writeSomething() {
    this.logger.warn('TestFunc wrote something');
  }

  checkKhas() {
    this.logger.log('Khas İrdelemesi Başladı');
  }

  checkWater() {
    this.logger.verbose('Su seviyesi gerekli aralıkta');
  }

  checkIrrigation() {
    this.logger.debug('Yeterli nem seviyesi yok, sulama başlıyor');
  }

  loopDebug() {
    // for (let i = 0; i++; i < 15) {
    this.checkWater();
    this.checkKhas();
    this.checkIrrigation();
    this.writeSomething();
    //}
  }
}
