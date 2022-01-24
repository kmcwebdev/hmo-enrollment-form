import { ExclamationCircleIcon, MailIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TListBoxDesktop from '../components/TListBoxDesktop';
import SelectData from '../interface/select-data';
import classNames from '../utils/class-name';

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

export default function Home() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    relationship: string;
    position: string;
    email: string;
  }>();
  const [typesOfEnrollment, setTypesOfEnrollment] = useState<SelectData>(
    typesOfEnrollmentData[0]
  );
  const [prefix, setPrefix] = useState<SelectData>(prefixData[0]);

  return (
    <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <Head>
        <title>KMC HMO Enrollment Form</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='max-w-3xl mx-auto mt-10'>
        <form
          className='space-y-6'
          onSubmit={handleSubmit(async (data) => console.log(data))}
        >
          <TListBoxDesktop
            label='Type of Enrollment'
            data={typesOfEnrollmentData}
            selected={typesOfEnrollment}
            setSelected={setTypesOfEnrollment}
          />

          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2'>
            <TListBoxDesktop
              label='Prefix'
              data={prefixData}
              selected={prefix}
              setSelected={setPrefix}
            />

            {/** First name start */}
            <div className='w-full'>
              <label
                htmlFor='firstName'
                className='block mb-2.5 text-sm font-medium text-gray-700'
              >
                First name
              </label>
              <div className='relative rounded-md shadow-sm'>
                <input
                  {...register('firstName', { required: true })}
                  type='text'
                  className={classNames(
                    errors?.firstName
                      ? 'border-skin-kmc-red border-2'
                      : 'border-gray-300',
                    'block w-full pr-10 focus:outline-none focus:ring-skin-kmc-orange focus:border-skin-kmc-orange rounded-md sm:text-sm'
                  )}
                  aria-invalid='true'
                  aria-describedby='firstName-error'
                />
                {errors?.firstName && (
                  <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                    <ExclamationCircleIcon
                      className='w-5 h-5 text-skin-kmc-red'
                      aria-hidden='true'
                    />
                  </div>
                )}
              </div>
            </div>
            {/** First name end */}
          </div>

          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2'>
            {/** Middle name start */}
            <div className='w-full'>
              <label
                htmlFor='middleName'
                className='block mb-2.5 text-sm font-medium text-gray-700'
              >
                Middle name
              </label>
              <div className='relative mt-1 rounded-md shadow-sm'>
                <input
                  {...register('middleName', { required: true })}
                  type='text'
                  className={classNames(
                    errors?.middleName
                      ? 'border-skin-kmc-red border-2'
                      : 'border-gray-300 ',
                    'block w-full pr-10 focus:outline-none focus:ring-skin-kmc-orange focus:border-skin-kmc-orange rounded-md sm:text-sm'
                  )}
                  aria-invalid='true'
                  aria-describedby='middleName-error'
                />
                {errors?.middleName && (
                  <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                    <ExclamationCircleIcon
                      className='w-5 h-5 text-skin-kmc-red'
                      aria-hidden='true'
                    />
                  </div>
                )}
              </div>
            </div>
            {/** Middle name end */}

            {/** Last name start */}
            <div className='w-full'>
              <label
                htmlFor='lastName'
                className='block mb-2.5 text-sm font-medium text-gray-700'
              >
                Last name
              </label>
              <div className='relative mt-1 rounded-md shadow-sm'>
                <input
                  {...register('lastName', { required: true })}
                  type='text'
                  className={classNames(
                    errors?.lastName
                      ? 'border-skin-kmc-red border-2'
                      : 'border-gray-300 ',
                    'block w-full pr-10 focus:outline-none focus:ring-skin-kmc-orange focus:border-skin-kmc-orange rounded-md sm:text-sm'
                  )}
                  aria-invalid='true'
                  aria-describedby='lastName-error'
                />
                {errors?.lastName && (
                  <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                    <ExclamationCircleIcon
                      className='w-5 h-5 text-skin-kmc-red'
                      aria-hidden='true'
                    />
                  </div>
                )}
              </div>
            </div>
            {/** Last name end */}
          </div>

          {/** Suffix start */}
          <div className='w-full'>
            <label
              htmlFor='suffix'
              className='block mb-2.5 text-sm font-medium text-gray-700'
            >
              Suffix
            </label>
            <div className='relative mt-1 rounded-md shadow-sm'>
              <input
                {...register('suffix', { required: true })}
                type='text'
                className={classNames(
                  errors?.suffix
                    ? 'border-skin-kmc-red border-2'
                    : 'border-gray-300 ',
                  'block w-full pr-10 focus:outline-none focus:ring-skin-kmc-orange focus:border-skin-kmc-orange rounded-md sm:text-sm'
                )}
                aria-invalid='true'
                aria-describedby='suffix-error'
              />
              {errors?.suffix && (
                <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                  <ExclamationCircleIcon
                    className='w-5 h-5 text-skin-kmc-red'
                    aria-hidden='true'
                  />
                </div>
              )}
            </div>
          </div>
          {/** Suffix end */}

          {/** Relationship start */}
          <div className='w-full'>
            <label
              htmlFor='relationship'
              className='block mb-2.5 text-sm font-medium text-gray-700'
            >
              Department / Account name
            </label>
            <div className='relative mt-1 rounded-md shadow-sm'>
              <input
                {...register('relationship', { required: true })}
                type='text'
                className={classNames(
                  errors?.relationship
                    ? 'border-skin-kmc-red border-2'
                    : 'border-gray-300 ',
                  'block w-full pr-10 focus:outline-none focus:ring-skin-kmc-orange focus:border-skin-kmc-orange rounded-md sm:text-sm'
                )}
                aria-invalid='true'
                aria-describedby='relationship-error'
              />
              {errors?.relationship && (
                <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                  <ExclamationCircleIcon
                    className='w-5 h-5 text-skin-kmc-red'
                    aria-hidden='true'
                  />
                </div>
              )}
            </div>
          </div>
          {/** Relationship end */}

          {/** Position start */}
          <div className='w-full'>
            <label
              htmlFor='position'
              className='block mb-2.5 text-sm font-medium text-gray-700'
            >
              Position Title
            </label>
            <div className='relative mt-1 rounded-md shadow-sm'>
              <input
                {...register('position', { required: true })}
                type='text'
                className={classNames(
                  errors?.position
                    ? 'border-skin-kmc-red border-2'
                    : 'border-gray-300 ',
                  'block w-full pr-10 focus:outline-none focus:ring-skin-kmc-orange focus:border-skin-kmc-orange rounded-md sm:text-sm'
                )}
                aria-invalid='true'
                aria-describedby='position-error'
              />
              {errors?.position && (
                <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                  <ExclamationCircleIcon
                    className='w-5 h-5 text-skin-kmc-red'
                    aria-hidden='true'
                  />
                </div>
              )}
            </div>
          </div>
          {/** Position end */}

          {/** Email start */}
          <div className='w-full'>
            <label
              htmlFor='email'
              className='block mb-2.5 text-sm font-medium text-gray-700'
            >
              Email Address
            </label>
            <div className='relative mt-1 rounded-md shadow-sm'>
              <input
                {...register('email', { required: true })}
                type='email'
                className={classNames(
                  errors?.email
                    ? 'border-skin-kmc-red border-2'
                    : 'border-gray-300 ',
                  'block w-full pr-10 focus:outline-none focus:ring-skin-kmc-orange focus:border-skin-kmc-orange rounded-md sm:text-sm'
                )}
                aria-invalid='true'
                aria-describedby='email-error'
              />
              {errors?.email && (
                <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                  <ExclamationCircleIcon
                    className='w-5 h-5 text-skin-kmc-red'
                    aria-hidden='true'
                  />
                </div>
              )}
            </div>
          </div>
          {/** Email end */}

          <button
            type='submit'
            className='inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium leading-4 text-white transition-all bg-indigo-600 border border-transparent rounded-md shadow-sm gap-x-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:shadow-none active:scale-95'
          >
            <MailIcon className='ml-2 -mr-0.5 h-4 w-4' aria-hidden='true' />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
