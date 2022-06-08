import { DeviceTypes } from './device-types.models';

export class IrrigationTypes {
  name: string;
  title: string;
  description: string;
  devicesType: [DeviceTypes];

  isActive: boolean;
}
