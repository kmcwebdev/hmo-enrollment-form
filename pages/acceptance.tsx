import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import hmo from '../public/assets/images/hmo.png';

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
          <Image src={hmo} alt='hmo' />
          <div className='text-base text-center'>
            <a
              href='https://kmcstorage1.blob.core.windows.net/project-statics/KMC%20HMO%20Enrollment%20FAQs.61d11ed9443287.55108208.pdf'
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
            fuck it
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Acceptance;
