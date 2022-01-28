import { MailIcon } from '@heroicons/react/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
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
  { id: 3, name: 'Mrs' },
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

const relationshipToPrincipalData = [
  { id: 1, name: 'Spouse' },
  { id: 2, name: 'Child' },
  { id: 3, name: 'Parent' },
  { id: 4, name: 'Sibling' },
  { id: 5, name: 'Common-Law Partner' },
];

const reasonForSkippingHierarchyData = [
  { id: 1, name: 'Not applicable' },
  { id: 2, name: 'Qualified dependent is working abroad' },
  { id: 3, name: 'Qualified dependent is residing abroad' },
  { id: 4, name: 'Dependent is enrolled in another HMO' },
  { id: 5, name: 'Death of qualified dependent' },
  { id: 6, name: 'Spouse dependent has a different last name' },
  { id: 7, name: 'Child dependent has a different last name' },
  { id: 8, name: 'Parent dependent has a different last name' },
];

export default function Home() {
  const useFormReturn = useForm<IForm>({
    mode: 'onChange',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      doB: new Date(),
    },
  });

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
      <div className='max-w-3xl mx-auto'>
        <div className='mt-10'>
          <p className='text-justify'>
            Please indicate all required information related to Dependent. Make
            sure to attach the needed supporting document relative to the
            enrollment of this dependent.
          </p>
        </div>
        <div className='mt-5'>
          <div className='inset-0 flex items-center' aria-hidden='true'>
            <div className='w-full border-t border-skin-kmc-orange' />
          </div>
        </div>
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
              <TListBoxDesktop
                label='Prefix'
                name='prefix'
                data={prefixData}
                mb={2.5}
              />
            </div>
            <div className='col-span-5 lg:col-span-2'>
              <TInput label='First Name' name='firstName' />
            </div>
            <div className='col-span-5 lg:col-span-2'>
              <TInput label='Middle Name' name='middleName' />
            </div>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3'>
            <TInput label='Last Name' name='lastName' />
            <TInput label='Suffix' name='suffix' />
            <TListBoxDesktop label='Gender' name='gender' data={genderData} />
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
            <TListBoxDesktop
              label='Relationship to Principal'
              name='relationship'
              data={relationshipToPrincipalData}
            />
            <TListBoxDesktop
              label='Civil Status'
              name='civilStatus'
              data={civilStatusData}
            />
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
            <TDatepicker label='Date of Birth' name='doB' />
            <TListBoxDesktop
              label='Entitlement'
              name='entitlement'
              data={civilStatusData}
              mb={1.5}
            />
          </div>

          <TListBoxDesktop
            label='Reason for Skipping of Hierarchy'
            name='reasonForSkippingHierarchy'
            data={reasonForSkippingHierarchyData}
          />

          {/** Upload file example start */}
          <div
            className='mt-1 cursor-pointer sm:mt-0 sm:col-span-2'
            {...getRootProps()}
          >
            <div className='flex justify-center w-full px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-skin-kmc-orange'>
              <div className='space-y-1 text-center'>
                <svg
                  className='w-12 h-12 mx-auto text-gray-400'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 48 48'
                  aria-hidden='true'
                >
                  <path
                    d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <div className='flex text-sm text-gray-600'>
                  <label
                    htmlFor='file-upload'
                    className='relative font-medium bg-white rounded-md cursor-pointer text-skin-kmc-orange hover:text-skin-kmc-orange focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-skin-kmc-orange'
                  >
                    <span>Upload a file</span>
                    <input className='sr-only' {...getInputProps()} />
                  </label>
                  <p className='pl-1'>or drag and drop</p>
                </div>
                {isDragActive ? (
                  <p className='text-xs text-gray-500'>Drop the files here.</p>
                ) : (
                  <p className='text-xs text-gray-500'>
                    Upload all supporting documents here.
                  </p>
                )}
              </div>
            </div>
          </div>
          {/** Upload file example end */}

          <button
            type='submit'
            className='inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm bg-skin-kmc-orange gap-x-2 hover:bg-skin-kmc-orange selection:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skin-kmc-orange'
          >
            <MailIcon className='ml-2 -mr-0.5 h-4 w-4' aria-hidden='true' />
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
