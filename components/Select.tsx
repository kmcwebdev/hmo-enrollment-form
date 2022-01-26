import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import React, { Fragment, HTMLProps, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

export interface IOption {
  name: string;
  value: string | number | null;
}

interface SelectProps extends HTMLProps<HTMLDivElement> {
  label: string;
  name: string;
  options: {
    name: string;
    value: string | number | boolean | null;
  }[];
  onOptionChange?: (e: IOption) => void;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  onOptionChange,
  ...rest
}) => {
  const [selected, setSelected] = useState(options[0]);

  const {
    setValue,
    formState: { errors },
    trigger,
    getValues,
  } = useFormContext();

  useEffect(() => {
    const value = getValues(name);

    if (value !== null && value !== undefined) {
      setSelected(() => {
        return options.find((x) => x.value === value) || options[0];
      });
    }
  }, [name, getValues, options]);

  const handleChange = (e: IOption) => {
    setValue(name, e.value);
    trigger(name);
    setSelected(e);
    onOptionChange && onOptionChange(e);
  };

  return (
    <div {...rest}>
      <label htmlFor={name} className='block text-black'>
        {label}
      </label>

      <Listbox value={getValues(name)} onChange={handleChange}>
        <div className='relative mt-1'>
          <Listbox.Button
            className={`relative w-full py-2 pl-3 pr-10 text-left bg-white border transition-all rounded-lg focus:shadow-sm cursor-default sm:text-sm ${
              errors[name] ? 'border-rose-500' : 'border-gray-300'
            }`}
          >
            <span
              className={`block truncate transition-all ${
                errors[name]
                  ? 'text-rose-600'
                  : selected.value !== null
                  ? 'text-gray-700'
                  : 'text-gray-400'
              }`}
            >
              {selected.name}
            </span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <SelectorIcon
                className={`w-5 h-5 ${
                  errors[name] ? 'text-rose-500' : 'text-gray-400'
                }`}
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute z-40 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `${
                      active
                        ? 'text-primary bg-primary bg-opacity-10'
                        : 'text-gray-900'
                    }
                      cursor-default select-none relative py-2 pl-10 pr-4 transition-all`
                  }
                  value={option}
                >
                  {({ active }) => (
                    <>
                      <span
                        className={`${
                          selected.name === option.name
                            ? 'font-proxiSemiBold text-primary'
                            : 'font-proxiRegular'
                        } block truncate transition-all`}
                      >
                        {option.name}
                      </span>
                      {selected.name === option.name ? (
                        <span
                          className={`${
                            active ? 'text-primary' : 'text-primary'
                          }
                            absolute inset-y-0 left-0 flex items-center pl-3 transition-all`}
                        >
                          <CheckIcon className='w-5 h-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      {errors[name] && (
        <p className='mt-2 text-sm text-rose-600' id='email-error'>
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default Select;
