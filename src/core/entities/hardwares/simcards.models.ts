import { UserNew } from '../../../frameworks/data-services/mongo/model';

export class SimCard {
  user: [UserNew];
  gsm: string;
  serialNum: string;
  staticIP: string;

  isActive: boolean;
}
