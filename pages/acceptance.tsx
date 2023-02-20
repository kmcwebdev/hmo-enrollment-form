import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';

const Acceptance = () => {
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
          <Image
            src='https://cdn.kmc.solutions/project-statics/hmo.PNG'
            width={1000}
            height={700}
            alt='hmo'
          />
          <div className='text-base text-center'>
            <a
              className='text-blue-500'
              href='https://cdn.kmc.solutions/project-statics/2506431_KMC%20HMO%20Enrollment%20FAQs%20for%20Update.pdf'
              target='_blank'
            >
              Click here to read FAQ's
            </a>
          </div>
          <p className='text-base text-center'>
            I fully understand and confirm that I have read the HMO enrolment
            FAQs and that the enrolment of dependents should follow the
            hierarchy rule and should have complete requirements to be
            processed.
          </p>
          <Link href={`/hmo-requirements?employeeId=${query.employeeId}`}>
            <button
              type='button'
              className='inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm bg-skin-kmc-orange gap-x-2 hover:bg-skin-kmc-orange selection:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skin-kmc-orange'
            >
              I AGREE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Acceptance;
