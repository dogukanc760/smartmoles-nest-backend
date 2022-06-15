export class ValveCard {
  userId: string;
  deviceId: string;
  hubGroupId: string;
  deviceLocation: string;

  pressureSensor: boolean;

  responseRangeWhenIrrigation: string;

  responseRangeNonIrrigation: string;

  waterMeter: string;

  waterSensor: string;

  numberOfPulses: number;

  virtualPump: boolean;

  boxMoistureSensor: boolean;

  gpsModule: boolean;

  barcodeNo: string;

  valveWorkTime: string;

  isActive: boolean;
}
