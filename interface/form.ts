import IFile from './file';

export default interface IForm {
  prefix: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  suffix?: string;
  relationship: string;
  gender: string;
  civilStatus: string;
  doB: Date;
  entitlement: number;
  reasonForSkippingHierarchy: string;
  hmoEnrolledDependentsFiles: IFile[];
}
