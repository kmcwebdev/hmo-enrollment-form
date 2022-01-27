export default interface IForm {
  typeOfEnrollment: string;
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
}
