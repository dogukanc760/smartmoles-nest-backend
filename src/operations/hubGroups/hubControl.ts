import { Injectable, Logger } from '@nestjs/common';
import { HubGroupService } from '../../services';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class HubControlOperation {
  constructor(private hubGroupService: HubGroupService) {}
  private readonly logger = new Logger(HubControlOperation.name);
  async getHubGroups() {
    return await this.hubGroupService.getAllHubGroups();
  }
  @Cron('*/10 * * * * *')
  async getHubList() {
    const someData = this.hubGroupService.getAllHubGroups();
    someData.then((result) => {
      result.map((x) => {
        if (x.status === 'Aktif') {
          this.logger.verbose(x.name + ' Adlı Hub Aktif \n');
        } else {
          this.logger.verbose(x.name + ' Adlı Hub Pasif \n');
        }
      });
    });
    //return 'Hub control başladı \n Hublar Listeleniyor \n Egemen Kaya \n Leylandi \n Konsept Tarım 1';
  }
}
