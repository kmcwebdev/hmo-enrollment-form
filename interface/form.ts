export default interface IForm {
  typeOfEnrollment: string;
  prefix: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  suffix?: string;
  gender: string;
  email: string;
  relation: string;
  positionTitle: string;
  dateOfBirth: Date;
  civilStatus: string;
  hmoEligibility: string;
}
