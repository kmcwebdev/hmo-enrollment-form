import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import SelectData from '../interface/select-data';
import classNames from '../utils/class-name';

interface TListBoxDesktopProps {
  label: string;
  name: string;
  data: Array<SelectData>;
}

const TListBoxDesktop: React.FC<TListBoxDesktopProps> = ({
  label,
  name,
  data,
}) => {
  const [selected, setSelected] = useState<SelectData>(data[0]);

  const { setValue } = useFormContext();

  const handleChange = (data: SelectData) => {
    setValue(name, data.name);
    setSelected(data);
  };

  return (
    <div className='w-full'>
      <Listbox value={selected} onChange={handleChange}>
        {({ open }) => (
          <>
            <Listbox.Label className='block text-base font-medium text-gray-700 mb-1.5'>
              {label}
            </Listbox.Label>
            <div className='relative'>
              <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-skin-kmc-orange focus:border-skin-kmc-orange sm:text-sm'>
                <span className='block truncate'>{selected.name}</span>
                <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                  <SelectorIcon
                    className='w-5 h-5 text-gray-400'
                    aria-hidden='true'
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {data.map((toe) => (
                    <Listbox.Option
                      key={toe.id}
                      className={({ active }) =>
                        classNames(
                          active
                            ? 'text-white bg-skin-kmc-orange'
                            : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9'
                        )
                      }
                      value={toe}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {toe.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-skin-kmc-orange',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon
                                className='w-5 h-5'
                                aria-hidden='true'
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default TListBoxDesktop;
