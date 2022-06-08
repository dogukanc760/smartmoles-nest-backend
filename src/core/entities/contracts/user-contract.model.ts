import { ContractTypesDocument } from '../../../frameworks/data-services/mongo/model';
import { ContractTypes } from './contractType.model';

export class UserContract {
  userId: string;
  contractId: string;
  contract: [ContractTypes];
  isActive: boolean;
}
