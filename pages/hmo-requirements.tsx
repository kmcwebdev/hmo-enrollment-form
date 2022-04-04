import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  // More people...
];

const HmoRequirements: React.FC = () => {
  const { query, isReady } = useRouter();

  useEffect(() => {
    if (isReady && !Object.keys(query).length) {
      Router.push('/not-found');
    }
  }, [query, isReady]);

  return (
    <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mt-10 space-y-4'>
          <div className='px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col mt-8'>
              <div className='-mx-4 -my-2 sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 align-middle'>
                  <div className='shadow-sm ring-1 ring-black ring-opacity-5'>
                    <table
                      className='min-w-full border-separate'
                      style={{ borderSpacing: 0 }}
                    >
                      <thead className='bg-[#001738]'>
                        <tr>
                          <th
                            scope='col'
                            className='bg-[#001738] text-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm sm:pl-6 lg:pl-8'
                          >
                            HMO REQUIREMENTS
                          </th>
                          <th
                            scope='col'
                            className='bg-[#001738] bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm'
                          >
                            <span className='sr-only'>Edit</span>
                          </th>
                          <th
                            scope='col'
                            className='bg-[#001738] bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm'
                          >
                            <span className='sr-only'>Edit</span>
                          </th>
                          <th
                            scope='col'
                            className='bg-[#001738] bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm'
                          >
                            <span className='sr-only'>Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <thead className='bg-gray-50'>
                        <tr>
                          <th
                            scope='col'
                            className='sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8'
                          >
                            EMPLOYEE CIVIL STATUS
                          </th>
                          <th
                            scope='col'
                            className='sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'
                          >
                            ELIGIBLE DEPENDENT'S
                          </th>
                          <th
                            scope='col'
                            className='sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell'
                          >
                            DEPENDENT AGE REQUIREMENTS
                          </th>
                          <th
                            scope='col'
                            className='sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter'
                          >
                            REQUIRED DOCUMENTS
                          </th>
                        </tr>
                      </thead>
                      <tbody className='bg-white'>
                        <tr key={1}>
                          <td className='hidden px-8 py-4 space-y-5 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap lg:table-cell'>
                            Single
                          </td>
                          <td className='hidden px-3 py-4 space-y-5 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap lg:table-cell'>
                            <p>Spouse</p>
                            <p>Children</p>
                            <p>Parents</p>
                          </td>
                          <td className='hidden px-3 py-4 space-y-5 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap lg:table-cell'>
                            <p>Up to 65 Yrs Old</p>
                            <p>15 Days old to 25 Yrs Old</p>
                            <p>Up to 75 Yrs Old</p>
                          </td>
                          <td className='hidden px-3 py-4 space-y-5 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap lg:table-cell'>
                            <p>Marriage Contract</p>
                            <p>Birth Certificate</p>
                            <p>Employee’s Birth Certificate 1 Valid ID</p>
                          </td>
                        </tr>
                        <tr key={2}>
                          <td className='hidden px-8 py-4 space-y-5 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap lg:table-cell'>
                            Married
                          </td>
                          <td className='hidden px-3 py-4 space-y-5 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap lg:table-cell'>
                            <p>Parents</p>
                            <p>Sibling</p>
                            <p>Common Law Partner</p>
                          </td>
                          <td className='hidden px-3 py-4 space-y-5 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap lg:table-cell'>
                            <p>Up to 65 Yrs Old</p>
                            <p>15 Days old to 25 Yrs Old</p>
                            <p>Up to 75 Yrs Old</p>
                          </td>
                          <td className='hidden px-3 py-4 space-y-5 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap lg:table-cell'>
                            <p>Employee’s Birth Certificate 1 Valid ID</p>
                            <p>Birth Certificate</p>
                            <p className='whitespace-normal w-[16rem]'>
                              Cenomer (Employee and Dependent) Brgy Certificate
                              (Employee and Dependent) Affidavit of Cohabitation
                              (Notarized)
                            </p>
                          </td>
                        </tr>
                        <tr key={3}>
                          <td className='hidden px-8 py-4 space-y-5 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap lg:table-cell'>
                            Single Parent
                          </td>
                          <td className='hidden px-3 py-4 space-y-5 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap lg:table-cell'>
                            <p>Spouse</p>
                            <p>Children</p>
                            <p>Parents</p>
                          </td>
                          <td className='hidden px-3 py-4 space-y-5 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap lg:table-cell'>
                            <p>Up to 65 Yrs Old</p>
                            <p>15 Days old to 25 Yrs Old</p>
                            <p>Up to 75 Yrs Old</p>
                          </td>
                          <td className='hidden px-3 py-4 space-y-5 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap lg:table-cell'>
                            <p>Marriage Contract</p>
                            <p>Birth Certificate</p>
                            <p>Employee’s Birth Certificate 1 Valid ID</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className='p-8 space-y-8'>
                      <div className='space-y-3'>
                        <p className='text-lg font-semibold font-barlow'>
                          MUST FOLLOW HIERARCHY RULE
                        </p>
                        <p>
                          PARENTS 66 years old above have higher premium fee but
                          lower Maximum Benefit Limit (MBL)
                        </p>
                      </div>
                      <div className='space-y-3'>
                        <p className='text-lg font-semibold font-barlow'>
                          FOR THOSE WITH SKIP HIERARCHY; PLEASE SUBMIT ANY OF
                          THE FF THAT CORRESPONDS TO YOUR DEPENDENT
                        </p>
                        <ul className='pl-5 list-disc'>
                          <li>
                            HMO card with certificate of coverage (w/ validity
                            period)
                          </li>
                          <li>Death certificate (if deceased)</li>
                          <li>
                            Health insurance or working contract (if working
                            abroad)
                          </li>
                          <li>
                            Affidavit of separation (for married employees who
                            are no longer cohabitating)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
