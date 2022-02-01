import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import requirements from '../public/requirements.png';

const HmoRequirements: React.FC = () => {
  const { query, isReady } = useRouter();

  useEffect(() => {
    if (isReady && !Object.keys(query).length) {
      Router.push('/not-found');
    }
  }, [query, isReady]);

  return (
    <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto'>
        <div className='mt-10 space-y-4'>
          <div>
            <p className='font-semibold font-barlow font-base'>
              HMO Requirements
            </p>
          </div>
          <div>
            <Image src={requirements} alt='requirements' />
          </div>
          <Link href={`/enroll?employeeId=${query.employeeId}`}>
            <button
              type='button'
              className='inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm bg-skin-kmc-orange gap-x-2 hover:bg-skin-kmc-orange selection:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skin-kmc-orange'
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HmoRequirements;
