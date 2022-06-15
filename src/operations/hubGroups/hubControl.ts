import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  CentralUnitService,
  HubGroupService,
  KhasService,
  ValveCardService,
} from '../../services';
import { Cron } from '@nestjs/schedule';
import { Khas } from '../../core';
import {
  GetCentralUnitDto,
  GetHubGroupsDto,
  GetKhasDto,
  UpdateHubGroupsDto,
} from '../../core/dtos';
import { ClientProxy } from '@nestjs/microservices';

//YArın method gövdeleri doldurulup cron job olarak bağlanacaktır
// ayrık metodlar tek bir cron job undan yönetilip sonuöçlara göre iletim yapılacaktır

@Injectable()
export class HubControlOperation {
  constructor(
    private hubGroupService: HubGroupService,
    private khasService: KhasService,
    private centralUnitService: CentralUnitService,
    private valveCardService: ValveCardService,
    @Inject('GREETING_SERVICE') private client: ClientProxy,
  ) {}
  private readonly logger = new Logger(HubControlOperation.name);
  hubGroups: GetHubGroupsDto[] = [];
  khasDevices: GetKhasDto[] = [];
  khasInfo: GetKhasDto[] = [];
  getKhasInfos: Khas[] = [];
  centralUnits: GetCentralUnitDto[] = [];

  hubGroupDto = new GetHubGroupsDto();
  khas: any;

  @Cron('*/60 * * * * *')
  //Rutin işlemleri başlatacak periyot zin ciri
  async processPeriod() {
    try {
      this.hubGroups = [];
      this.khasDevices = [];

      const allHubGroups = await this.hubGroupService.getAllHubGroupsWithDTO();
      // const allKhas = await this.khasService.getAllKhas();
      // const allCentralUnit = await this.centralUnitService.getAllCentralUnits();
      //bütün hub grouplarını çekiyor
      /*const allHubGroup = await allHubGroups.map(async (x) => {
        this.logger.verbose('Hub grupları');
        this.hubGroups = await this.hubGroupService.getAllHubGroupsWithDTO();
        this.logger.warn(x);
        return true;
      });*/
      for (const x of allHubGroups) {
        this.logger.verbose('Hub grupları');
        this.hubGroups.push(
          await this.hubGroupService.getAllHubGroupsWithDTO(),
        );
        this.logger.warn(x);
        true;
      }
      allHubGroups.forEach((element) => {
        console.log('foreach');
        console.log(element.name);
      });
      if (allHubGroups.length > 0) {
        allHubGroups.map(async (y) => {
          //

          //hub gruplarına bağlı khaslar
          this.khas = null;
          this.khas = await this.khasService.getKhasByCentralUnit(y._id);
          this.logger.verbose('Huba bağlı khas bilgileri çekiliyor.');
          this.khasDevices.push(this.khas);
          this.logger.warn(this.khasDevices);
          const checkHubTime = this.checkAndWriteHubDateTime(y._id, false);
          if (checkHubTime) {
            this.logger.verbose(
              y.name + ' isimli Hub tarih ve saati çekildi, güncellendi!',
            );
          } else {
            this.logger.error(
              y.name + ' isimli hubdan tarih ve saat okunamadı',
            );
          }
          const checkValveTime = await this.checkValveTimes(y._id);
          this.logger.verbose(
            'Huba bağlı vanaların çalışma zamanları kontrol ediliyor.',
          );
          if (checkValveTime) {
            const connect = await this.connectToSmartCard(
              y._id,
              'khasId',
              'userId',
              'userName',
              'deviceIP',
              'devicePort',
            );
            if (connect) {
              this.logger.verbose(
                'Hub Çalışma zaman dilimi içerisindedir, bağlantı yapılıyor.',
              );
            } else {
              this.logger.error(
                y.name + ' İsimli Hub Çalışma zaman dilimi dışarısındadır.',
              );
            }
          } else {
            this.logger.error(
              y._id +
                ' Idli ve ' +
                y.name +
                ' isimli cihazların çalışma bilgisi bulunamadı',
            );
          }
        });
      } else {
        this.logger.error('Hub Grupları Bulunamadı');
      }
    } catch (e) {
      this.logger.error('Bir hata oluştu' + e);
    }
  }

  async getHubGroups() {
    return await this.hubGroupService.getAllHubGroups();
  }
  async getHelloAsync() {
    const message = await this.client.send(
      { cmd: 'greeting-async' },
      'Progressive Coder',
    );
    return message;
  }
  async getHello() {
    return this.client.send({ cmd: 'greeting' }, 'Progressive Coder');
  }

  async getHubList() {
    this.hubGroups = [];
    const someData = this.hubGroupService.getAllHubGroups();
    const data = this.getHello().then((x) =>
      x.subscribe((y) => console.log(y)),
    );
    console.log(data);

    /*someData.then((result) => {
      result.map((x) => {
        if (this.hubGroups.length > result.length) {
          this.logger.error('Lenght is longer then result');
        } else {
          //this.hubGroups.push(x);
        }
        if (x.status === 'Aktif') {
          this.logger.verbose(x.name + ' Adlı Hub Aktif \n');
        } else {
          this.logger.verbose(x.name + ' Adlı Hub Pasif \n');
        }
      });
      this.hubGroups.map((y) => this.logger.log(y.name + 'hubgroup list'));
    });*/
    //return 'Hub control başladı \n Hublar Listeleniyor \n Egemen Kaya \n Leylandi \n Konsept Tarım 1';
  }

  //2. adım hub start için fonksiyon

  //tek bir hub başlatma
  async hubStart(id: any, updateHubGroupDto: UpdateHubGroupsDto) {
    updateHubGroupDto.status = 'Aktif';

    this.logger.verbose(updateHubGroupDto.name + ' isimli hub başlatıldı');

    return await this.hubGroupService.updateHubGroup(id, updateHubGroupDto);
  }

  //tek bir hub durdurma
  async hubStop(id: any, updateHubGroupDto: UpdateHubGroupsDto) {
    updateHubGroupDto.status = 'Pasif';

    this.logger.verbose(updateHubGroupDto.name + ' isimli hub durduruldu');

    return await this.hubGroupService.updateHubGroup(id, updateHubGroupDto);
  }
  //bütün hubları başlatır
  async hubAllStart() {
    try {
      const passiveHubGroup = (
        await this.hubGroupService.getAllHubGroupsWithDTO()
      )
        .filter((x) => x.status === 'Pasif')
        .map(async (y) => {
          const updateHubGroupDto = new UpdateHubGroupsDto();
          updateHubGroupDto.centralUnitId = y.centralUnitId;
          updateHubGroupDto.name = y.name;
          updateHubGroupDto.deviceType = y.deviceType;
          updateHubGroupDto.code = y.code;
          updateHubGroupDto.status = 'Aktif';
          updateHubGroupDto.valveCheck = y.valveCheck;
          await this.hubGroupService.updateHubGroup(y._id, updateHubGroupDto);
          this.logger.verbose(y.name + ' isimli hub grubu başlatıldı');
        });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async hubAllStop() {
    try {
      const passiveHubGroup = (
        await this.hubGroupService.getAllHubGroupsWithDTO()
      )
        .filter((x) => x.status === 'Aktif')
        .map(async (y) => {
          const updateHubGroupDto = new UpdateHubGroupsDto();
          updateHubGroupDto.centralUnitId = y.centralUnitId;
          updateHubGroupDto.name = y.name;
          updateHubGroupDto.deviceType = y.deviceType;
          updateHubGroupDto.code = y.code;
          updateHubGroupDto.status = 'Pasif';
          updateHubGroupDto.valveCheck = y.valveCheck;
          await this.hubGroupService.updateHubGroup(y._id, updateHubGroupDto);
          this.logger.verbose(y.name + ' isimli hub durduruldu');
        });
      return true;
    } catch (e) {
      console.log(e);
      this.logger.error(e);
      return false;
    }
  }

  //@Cron('*/10 * * * * *')
  // 3. adım huba bağlı khas bilgileri ve hub bilgileri çekildi
  async getKhasAndHubInfo(hubId: any) {
    return await this.khasService.getKhasByCentralUnit(hubId);
  }

  //4. adım hub vana çalısma zamanı bilgileri çek (checkValveTimes)
  async checkValveTimes(hubId: any) {
    try {
      const valves = (
        await this.valveCardService.getValveCardByCentralUnit(hubId)
      ).map((x) => {
        const minute = new Date().getMinutes();
        const hour = new Date().getHours();
        const month = new Date().getMonth();
        const day = new Date().getDay();
        const year = new Date().getFullYear();
        const firstPhase = x.valveWorkTime.slice(0, 5);
        const secondPhase = x.valveWorkTime.slice(6);
        const firstHour = Number(firstPhase.slice(0, 1));
        const firstMin = Number(firstPhase.slice(3, 4));

        const secondHour = Number(secondPhase.slice(0, 1));
        const secondMin = Number(secondPhase.slice(3, 4));

        const reservDate = new Date(year, month, day, hour, minute);
        const reservStart = new Date(year, month, day, firstHour, firstMin);
        const reservFinish = new Date(year, month, day, secondHour, secondMin);

        if (reservDate >= reservStart && reservDate <= reservFinish) {
          //çalışma aralığında akıllı karta bağlan, log at
          this.logger.verbose(
            x.hubGroupId +
              ' Idli gruba ait vana çalışma aralığında akıllı karta bağlanılıyor.',
          );
          return true;
        } else {
          //karta bağlan, çalışma aralığında değil, log at
          this.logger.error(
            x.hubGroupId +
              ' Idli gruba ait vana çalışma aralığında değil akıllı karta bağlanılıyor.',
          );
          return false;
        }
      });
    } catch (e) {
      this.logger.error('Akıllı Kart Bilgisi Bulunamadı');
      console.log(e);
      return false;
    }
  }

  //5. adım - eğer bir önceki 4. adım true dönerse akıllı kart bağlantısını yapacak kısım
  async connectToSmartCard(
    hubId: string,
    khasId: string,
    userId: string,
    userName: string,
    deviceIP: string,
    devicePort: string,
  ) {
    if (hubId) {
      return true;
    }
    return false;
  }

  //5. adım - eğer bir önce ki 4. adım false dönerse vana çalışma zamanı diyip log atacağımız kısım
  dontConnectButWriteLog(
    hubId: string,
    khasId: string,
    userId: string,
    userName: string,
    deviceIP: string,
    devicePort: string,
  ) {
    if (hubId) {
      return true;
    }
    return false;
  }

  //6. hub vana çalışma zamanı bilgisi bulunamadı karta bağlan adımı
  connectToSmartCardBecauseDontWhy(
    hubId: string,
    khasId: string,
    userId: string,
    userName: string,
    deviceIP: string,
    devicePort: string,
  ) {
    if (hubId) {
      return true;
    }
    return false;
  }

  //7. adım hub işlemlerini bitir end yap ve log at
  hubDisconnectAndEnd(
    hubId: string,
    khasId: string,
    userId: string,
    userName: string,
    deviceIP: string,
    devicePort: string,
  ) {
    if (hubId) {
      return true;
    }
    return false;
  }

  //ilk 7 adımdan herhangi birinde hata olursa try catch gibi exception fırlatıp log atıp hatayı bitir
  stopProcessAndWriteLog() {
    return true;
  }

  // Numarasız 8 den önce ki adım hublara erişim sırasında Hub tarih saat bilgisi çek ve log at
  // ilk seferde okunmazsa thraedlerden tekrar dene(erişim var/yok okundu/okunmadı)
  //bağlantı esnasında kartlara bunu otomatik yapıp atmamız gerekiyor ve tekrar denemek için (reTry) gibi bir kontrolcü ile bunu yapmamız gerekiyor
  async checkAndWriteHubDateTime(hubGroupId: any, checker: boolean) {
    try {
      //eğer checker true ise sadece saati oku, eğer değil ise hub saatini güncelle anlamına geliyor.
      if (checker) {
        return true;
      }
      const getHubsById = await this.hubGroupService.getOneHubGroup(hubGroupId);
      const minute = new Date().getMinutes();
      const hour = new Date().getHours();
      const month = new Date().getMonth();
      const day = new Date().getDay();
      const year = new Date().getFullYear();
      console.log(new Date().getHours() + new Date().getMinutes());
      const reservDate = new Date(year, month, day, hour, minute);
      const lastDate = new Date()
        .toLocaleDateString('tr-TR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replace(/\./g, '/')
        .toString();
      const lastHour = new Date().getHours() + ':' + new Date().getMinutes();
      console.log(
        reservDate
          .toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })
          .replace(/\./g, '/'),
      );
      getHubsById.hubHour = lastHour;
      getHubsById.hubDate = lastDate;
      await this.hubGroupService.updateHubGroup(hubGroupId, getHubsById);
      return true;
    } catch (e) {
      console.log(e);
      this.logger.error(e);
      return false;
    }
  }

  //8. adım Hub Khas Control önce huba bağlı çektiğimiz khas gruplara göre khas gruplarına bağlı cihazların bilgilerini çek
  // bu bilgilere göre tek tek nem okumaya çalış sonuca göre log at ve veri yaz
  hubKhasControl() {
    return true;
  }
}
