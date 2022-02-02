import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDependent } from '../context/DependentContext';

const ActiveRecord: React.FC = () => {
  const { data } = useDependent();

  const { isLoading, mutateAsync } = useMutation({
    mutationKey: 'postEmployeeDependents',
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className='space-y-5'>
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
                    data.dependents.map((dependent, dependentIdx) => (
                      <tr
                        key={dependentIdx + 1}
                        className={
                          dependentIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }
                      >
                        <td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
                          {`${dependent.prefix}. ${dependent.firstName} ${
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
        >
          Submit Dependent{data.dependents.length > 1 && 's'}
        </button>
      )}
    </div>
  );
};

export default ActiveRecord;
