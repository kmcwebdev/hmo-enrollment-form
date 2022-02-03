import { CheckCircleIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { useDependent } from '../context/DependentContext';
import IForm from '../interface/form';

const postDependents = async (payload: {
  employeeId: string;
  data: {
    typeOfEnrollment: string;
    dependents: IForm[];
  };
}) => {
  const { employeeId, data } = payload;

  const baseMNProdURL = 'https://acmkmc.azurewebsites.net';
  const erpApiKey = '620f5854-de2a-4993-a1d7-b5a5a8f09457';

  const response = await fetch(
    `${baseMNProdURL}/api/employees/${employeeId}/hmo-enroll-dependent?apiKey=${erpApiKey}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(data),
    }
  );

  return await response.json();
};

const ActiveRecord: React.FC = () => {
  const { isReady, query } = useRouter();
  const { data, setData } = useDependent();

  const { isLoading, mutateAsync, isSuccess } = useMutation({
    mutationKey: 'postEmployeeDependents',
    mutationFn: postDependents,
    onSuccess: () => {
      localStorage.setItem('data', JSON.stringify([]));
      setData(null);
    },
  });

  return (
    <div className='space-y-5'>
      {!isLoading && isSuccess && (
        <div className='p-4 rounded-md bg-green-50'>
          <div className='flex'>
            <div className='flex-shrink-0'>
              <CheckCircleIcon
                className='w-5 h-5 text-green-400'
                aria-hidden='true'
              />
            </div>
            <div className='ml-3'>
              <h3 className='text-sm font-medium text-green-800'>
                Your request has been sent!
              </h3>
              <div className='mt-2 text-sm text-green-700'>
                <p>
                  Our team will contact you regarding the status of your
                  enrollment. We've sent a request number in your email. Please
                  keep it for follow-up purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                    >
                      Relationship
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                    >
                      Entitlement
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data?.dependents?.map((dependent, dependentIdx) => (
                      <tr
                        key={dependentIdx + 1}
                        className={
                          dependentIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }
                      >
                        <td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
                          {`${dependent.prefix} ${dependent.firstName} ${
                            dependent.lastName
                          }${dependent.suffix ? ' ' + dependent.suffix : ''}`}
                        </td>
                        <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                          {dependent.relationship}
                        </td>
                        <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                          {dependent.entitlement}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {data && (
        <button
          type='submit'
          className='inline-flex items-center justify-center float-right px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm bg-skin-kmc-orange gap-x-2 hover:bg-skin-kmc-orange selection:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skin-kmc-orange'
          onClick={async () => {
            if (isReady && query && query.employeeId)
              await mutateAsync({
                employeeId: query.employeeId as string,
                data,
              });
          }}
        >
          Submit Dependent{data?.dependents?.length > 1 && 's'}
        </button>
      )}
    </div>
  );
};

export default ActiveRecord;
