import { IrrigationTypes } from '../hardwares/irrigation-types.model';
import { DeviceTypes } from '../hardwares/device-types.models';

export class Khas {
  //hub group ıd
  centralUnitId: string;

  userId: string;

  valveName: string;

  sensorType: [DeviceTypes];

  plantsType: string;

  //sensör montajı yatay yada dikey
  devicePositioning: string;

  dripperRange: string;

  irrigationTypes: [IrrigationTypes];

  responseRangeWhenIrrigation: string;

  responseRangeNonIrrigation: string;

  // x ten y ye kadar olan değerlik aralığı bir nevi logaritmik limit
  moistureLimitRange: string[];

  status: string;

  valveChecks: string;

  isActive: boolean;
}
