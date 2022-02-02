import { PlusCircleIcon } from '@heroicons/react/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useDependent } from '../context/DependentContext';
import IFile from '../interface/file';
import IForm from '../interface/form';
import SelectData from '../interface/select-data';
import classNames from '../utils/class-name';
import FormSchema from '../yup-schema/form-schema';
import { Form } from './Form';
import TDatepicker from './TDatePicker';
import TInput from './TInput';
import TListBoxDesktop from './TListBoxDesktop';

interface DependentFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface FormExtend {
  typeOfEnrollment?: string;
}

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

const relationshipToPrincipalData: SelectData[] = [
  { id: 1, name: 'Spouse' },
  { id: 2, name: 'Child' },
  { id: 3, name: 'Parent' },
  { id: 4, name: 'Sibling' },
  { id: 5, name: 'Common-Law Partner' },
];

const reasonForSkippingHierarchyData: SelectData[] = [
  { id: 1, name: 'Not applicable' },
  { id: 2, name: 'Qualified dependent is working abroad' },
  { id: 3, name: 'Qualified dependent is residing abroad' },
  { id: 4, name: 'Dependent is enrolled in another HMO' },
  { id: 5, name: 'Death of qualified dependent' },
  { id: 6, name: 'Spouse dependent has a different last name' },
  { id: 7, name: 'Child dependent has a different last name' },
  { id: 8, name: 'Parent dependent has a different last name' },
];

const entitlementData: SelectData[] = [
  {
    id: 1,
    name: 'Free',
  },
  {
    id: 2,
    name: 'Salary Deduction',
  },
];

const upload = async (file: File) => {
  const baseMNProdURL = 'https://erp-api.kmc.solutions';
  const erpApiKey = '620f5854-de2a-4993-a1d7-b5a5a8f09457';

  const url = `${baseMNProdURL}/api/Azure/blob/upload?folder=hmo&apiKey=${erpApiKey}`;

  const data = new FormData();
  data.append('file', file);

  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });

  return await response.text();
};

const DependentForm: React.FC<DependentFormProps> = ({ setIsOpen }) => {
  const { data, setData } = useDependent();
  const [files, setFiles] = useState<IFile[]>();

  const { isLoading, mutateAsync } = useMutation({
    mutationKey: 'Upload',
    mutationFn: upload,
  });

  const useFormReturn = useForm<IForm & FormExtend>({
    mode: 'onChange',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      doB: new Date(),
    },
  });

  const onDrop = useCallback(async (acceptedFiles) => {
    const files = acceptedFiles as File[];

    const x = files.map(async (file) => ({
      filePath: await mutateAsync(file),
      fileName: file.name,
    }));

    const y = await Promise.all(x);

    setFiles((old) => [...(old || []), ...y]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const {
    formState: { isValid },
    handleSubmit,
  } = useFormReturn;
  return (
    <Form
      useFormReturn={useFormReturn}
      onSubmit={handleSubmit(async (formData) => {
        // To not duplicate this value.
        const foo = data?.typeOfEnrollment || formData.typeOfEnrollment;

        delete formData.typeOfEnrollment;

        formData.hmoEnrolledDependentsFiles = files || [];

        if (isValid) {
          setData((old) => ({
            typeOfEnrollment: foo!,
            dependents: [...(old?.dependents || []), formData],
          }));

          setIsOpen(false);
          setFiles([]);
        }
      })}
    >
      {!data?.typeOfEnrollment && (
        <TListBoxDesktop
          label='Type of Enrollment'
          name='typeOfEnrollment'
          data={typesOfEnrollmentData}
          disabled={data?.typeOfEnrollment ? true : false}
        />
      )}

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
          data={entitlementData}
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
              className={classNames(
                'w-12 h-12 mx-auto text-gray-400',
                isLoading ? 'animate-spin' : 'animate-none'
              )}
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
        <PlusCircleIcon className='ml-2 -mr-0.5 h-4 w-4' aria-hidden='true' />
        Submit
      </button>
    </Form>
  );
};

export default DependentForm;
