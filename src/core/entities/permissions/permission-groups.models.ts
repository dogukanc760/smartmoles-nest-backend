import { Permission } from './permission.model';

export class PermissionGroup {
  groupName: string;
  groupTitle: string;
  groupDescription: string;
  groupLevel: string;
  groupContent: [Permission];
  isActive: boolean;
}
