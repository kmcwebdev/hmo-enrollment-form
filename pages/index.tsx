import { MailIcon } from '@heroicons/react/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { Form } from '../components/Form';
import TDatepicker from '../components/TDatePicker';
import TInput from '../components/TInput';
import TListBoxDesktop from '../components/TListBoxDesktop';
import IForm from '../interface/form';
import SelectData from '../interface/select-data';
import FormSchema from '../yup-schema/form-schema';

const typesOfEnrollmentData: SelectData[] = [
  { id: 1, name: 'New Hire Dependent Enrollment' },
  { id: 2, name: 'Existing employee - Enroll my Newborn baby' },
  { id: 3, name: 'Existing employee - Enroll Newly Married' },
  { id: 4, name: 'Existing employee - Others' },
];

const prefixData: SelectData[] = [
  { id: 1, name: 'Mr' },
  { id: 2, name: 'Ms' },
];

const genderData: SelectData[] = [
  { id: 1, name: 'Male' },
  { id: 2, name: 'Female' },
];

const civilStatusData: SelectData[] = [
  { id: 1, name: 'Single' },
  { id: 2, name: 'Married' },
  { id: 3, name: 'Widowed' },
  { id: 4, name: 'Legally Separated' },
  { id: 5, name: 'Single Parent' },
];

const hmoEligibilityData: SelectData[] = [
  { id: 1, name: 'Upon Hire' },
  { id: 2, name: 'Upon Regularization' },
  { id: 3, name: 'After 1 Month' },
  { id: 4, name: 'After 1 Year' },
  { id: 5, name: 'After 1 Week' },
];

const salaryDeductionData: SelectData[] = [
  { id: 1, name: 'Yes' },
  { id: 2, name: 'No' },
];

export default function Home() {
  const useFormReturn = useForm<IForm>({
    mode: 'onChange',
    resolver: yupResolver(FormSchema),
    defaultValues: {},
  });

  const {
    formState: { isValid },
    handleSubmit,
    getValues,
  } = useFormReturn;

  return (
    <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <Head>
        <title>KMC HMO Enrollment Form</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='max-w-3xl mx-auto mt-10'>
        <Form
          useFormReturn={useFormReturn}
          onSubmit={handleSubmit(async (data) => console.log(data))}
        >
          <TListBoxDesktop
            label='Type of Enrollment'
            name='typeOfEnrollment'
            data={typesOfEnrollmentData}
          />

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-5 lg:grid-cols-5'>
            <div className='col-span-5 lg:col-span-1'>
              <TListBoxDesktop label='Prefix' name='prefix' data={prefixData} />
            </div>
            <div className='col-span-5 lg:col-span-2'>
              <TInput label='First name' name='firstName' />
            </div>
            <div className='col-span-5 lg:col-span-2'>
              <TInput label='Middle name' name='middleName' />
            </div>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3'>
            <TInput label='Last name' name='lastName' />
            <TInput label='Suffix' name='suffix' />
            <TListBoxDesktop label='Gender' name='gender' data={genderData} />
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
            <TInput label='Email' type='email' name='email' />
            <TDatepicker label='Date of Birth' name='dateOfBirth' />
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
            <TInput label='Department / Account Name' name='relation' />
            <TInput label='Position Title' name='positionTitle' />
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
            <TListBoxDesktop
              label='Civil Status'
              name='civilStatus'
              data={civilStatusData}
            />
            <TDatepicker label='Start Date' name='startDate' />
          </div>

          <TListBoxDesktop
            label='HMO Eligibility of Dependent (please verify with your employment contract)'
            name='hmoEligibility'
            data={hmoEligibilityData}
          />

          <TListBoxDesktop
            label='Are you enrolling a dependent for Salary Deduction?'
            name='salaryDeduction'
            data={salaryDeductionData}
          />

          <button
            type='submit'
            className='inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium leading-4 text-white transition-all bg-indigo-600 border border-transparent rounded-md shadow-sm gap-x-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:shadow-none active:scale-95'
          >
            <MailIcon className='ml-2 -mr-0.5 h-4 w-4' aria-hidden='true' />
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
