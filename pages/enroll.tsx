import { PlusCircleIcon } from '@heroicons/react/solid';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import ActiveRecord from '../components/ActiveRecord';
import TDialog from '../components/TDialog';
import { DependentProvider } from '../context/DependentContext';

const Enroll = ({ data }: { data: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const validateEmployee = () => {
      if (data === 'Failed') Router.push('/not-found');

      return;
    };

    validateEmployee();
  }, []);

  return (
    <DependentProvider>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <Head>
          <title>KMC HMO Enrollment Form</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='max-w-3xl mx-auto'>
          <div className='mt-10'>
            <p className='text-justify'>
              Please indicate all required information related to Dependent.
              Make sure to attach the needed supporting document relative to the
              enrollment of this dependent.
            </p>
          </div>
          <div className='my-5'>
            <div className='inset-0 flex items-center' aria-hidden='true'>
              <div className='w-full border-t border-skin-kmc-orange' />
            </div>
          </div>
          <button
            type='submit'
            className='inline-flex items-center justify-center px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm bg-skin-kmc-orange gap-x-2 hover:bg-skin-kmc-orange selection:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skin-kmc-orange'
            onClick={() => setIsOpen(true)}
          >
            <PlusCircleIcon
              className='ml-2 -mr-0.5 h-4 w-4'
              aria-hidden='true'
            />
            Add Dependent
          </button>
          <TDialog isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className='my-5'>
            <ActiveRecord />
          </div>
        </div>
      </div>
    </DependentProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query;
  const baseURL = process.env.NXT_API_URL;

  const response = await fetch(
    `${baseURL}/api/employee-check?employeeId=${params.employeeId}`
  );

  return { props: { data: await response.text() } };
};

export default Enroll;
