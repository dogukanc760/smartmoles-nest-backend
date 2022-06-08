import { PermissionGroup } from '../permissions/permission-groups.models';
import { Permission } from '../permissions/permission.model';

export class UserNew {
  username: string;
  citizenshipNum: string;
  nationality: string;
  companyName: string;
  taxNum: string;
  mersisNo: string;
  address: string;
  name: string;
  surname: string;
  email: string;
  emailIsVerified: string;
  emailVerifiedAt: string;
  country: string;
  city: string;
  distinct: string;
  detailAddress: string;
  postalCode: string;
  phone: string;
  companyPhone: string;
  homePhone: string;
  password: string;
  permissions: [PermissionGroup];
  userType: string;

  isAdmin: boolean;

  isBusiness: boolean;

  isActive: boolean;
}
