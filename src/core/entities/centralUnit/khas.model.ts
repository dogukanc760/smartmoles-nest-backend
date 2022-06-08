import { IrrigationTypes } from '../hardwares/irrigation-types.model';
import { DeviceTypes } from '../hardwares/device-types.models';

export class Khas {
  centralUnitId: string;

  userId: string;

  valveName: string;

  sensorType: [DeviceTypes];

  plantsType: string;

  devicePositioning: string;

  dripperRange: string;

  irrigationTypes: [IrrigationTypes];

  status: string;

  valveChecks: string;

  isActive: boolean;
}
