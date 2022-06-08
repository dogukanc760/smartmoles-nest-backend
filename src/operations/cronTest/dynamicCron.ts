import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { Cron, Interval, SchedulerRegistry, Timeout } from '@nestjs/schedule';
import { TestFunc } from './testFunc';
import { HubControlOperation } from '../hubGroups/hubControl';

@Injectable()
export class CronService implements OnApplicationBootstrap {
  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private hubControl: HubControlOperation,
  ) {}
  variable2 = 10;

  private readonly logger = new Logger(CronService.name);
  private testFunc = new TestFunc();

  //@Cron('*/1 * * * * *')
  //runEvery10Seconds() {
  //console.log('Every 10 seconds');
  //}
  @Cron('*/10 * * * * *', {
    name: 'messaging',
    timeZone: 'America/New_York',
  })
  @Cron('*/10* * * * *')
  handleCron() {
    //this.logger.debug((this.variable2 += 1));
    //this.logger.log('Egemen Kaya Sulama Başladı');
    //this.logger.log('Egemen Kaya Sulama Başladı');
    //this.logger.log('Egemen Kaya Sulama Başladı');
    //this.logger.log('Konsept 1 Ince Su Sulama Başladı');
    //this.logger.verbose(this.hubControl.getHubList());
    //this.testFunc.loopDebug();
    //this.logger.log(this.hubControl.getHubList());
  }

  // triggerMessage() {
  //   console.log('Triggering Message Sending');
  // }

  // stopCronJob() {
  //   const job = this.schedulerRegistry.getCronJob('messaging');

  //   job.stop();
  //   console.log(job.lastDate());
  // }

  // deleteJob(jobName: string) {
  //   this.schedulerRegistry.deleteCronJob(jobName);
  // }

  // getCronJobs() {
  //   const jobs = this.schedulerRegistry.getCronJobs();

  //   jobs.forEach((value, key, map) => {
  //     console.log('Value:', value);
  //   });
  // }

  // @Interval('messaging', 3500)
  // triggerMethodBasedOnNamedInterval() {
  //   console.log(
  //     'Triggering the method after 3.5 seconds based on named interval',
  //   );
  //   this.logger.log((this.variable2 += 1));
  //   this.logger.log('Egemen Kaya Sulama Başladı');
  //   this.logger.error('Egemen Kaya Sulama Başladı');
  //   this.logger.error('Egemen Kaya Sulama Başladı');
  //   this.logger.debug('Konsept 1 Ince Su Sulama Başladı');
  //   this.testFunc.loopDebug();
  // }

  // clearInterval() {
  //   const interval = this.schedulerRegistry.getInterval('messaging');
  //   clearInterval(interval);
  // }

  // addNewInterval(intervalName: string, intervalTime: number) {
  //   const callback = () => {
  //     console.log(`Inteval ${intervalName} executing at time ${intervalTime}`);
  //   };

  //   const interval = setInterval(callback, intervalTime);
  //   this.schedulerRegistry.addInterval(intervalName, interval);
  // }

  // deleteInterval(intervalName: string) {
  //   this.schedulerRegistry.deleteInterval(intervalName);
  // }

  // listAllIntervals() {
  //   const intervals = this.schedulerRegistry.getIntervals();

  //   intervals.forEach((key) => console.log(`Interval: ${key}`));
  // }

  // @Timeout('messaging', 3500)
  // handleNamedTimeout() {
  //   console.log('Calling method after 3.5 seconds based on named timeout.');
  //   this.logger.debug((this.variable2 += 1));
  //   this.logger.error('Egemen Kaya Sulama Başladı');
  //   this.logger.error('Egemen Kaya Sulama Başladı');
  //   this.logger.verbose('Egemen Kaya Sulama Başladı');
  //   this.logger.debug('Konsept 1 Ince Su Sulama Başladı');
  //   this.testFunc.loopDebug();
  // }

  // clearTimeout() {
  //   const timeout = this.schedulerRegistry.getTimeout('messaging');
  //   clearTimeout(timeout);
  // }

  // addNewTimeout(timeoutName: string, milliseconds: number) {
  //   const callback = () => {
  //     console.log(`Timeout ${timeoutName} executing after ${milliseconds}`);
  //   };

  //   const timeout = setTimeout(callback, milliseconds);
  //   this.schedulerRegistry.addTimeout(timeoutName, timeout);
  // }

  // deleteTimeout(timeoutName: string) {
  //   this.schedulerRegistry.deleteTimeout(timeoutName);
  // }

  // listTimeouts() {
  //   const timeouts = this.schedulerRegistry.getTimeouts();
  //   timeouts.forEach((key) => console.log(`Timeout Name: ${key}`));
  // }

  onApplicationBootstrap(): any {
    console.log('appee');

    //this.runEvery10Seconds();
  }
}
