import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { useFormContext } from 'react-hook-form';
import classNames from '../utils/class-name';

interface TInputProps {
  label: string;
  name: string;
  type?: string;
}

const TInput: React.FC<TInputProps> = ({
  label,
  type = 'text',
  name,
  ...rest
}) => {
  const formContext = useFormContext();

  const {
    formState: { errors },
    register,
  } = formContext;

  return (
    <div className='w-full'>
      <label
        htmlFor={name}
        className='block mb-2.5 text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <div className='relative mt-1 rounded-md shadow-sm'>
        <input
          type={type}
          className={classNames(
            errors[name] ? 'border-skin-kmc-red border-2' : 'border-gray-300',
            'block w-full pr-10 focus:outline-none focus:ring-skin-kmc-orange focus:border-skin-kmc-orange rounded-md sm:text-sm'
          )}
          {...register(name)}
          {...rest}
        />

        {errors[name] && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
            <ExclamationCircleIcon
              className='w-5 h-5 text-skin-kmc-red'
              aria-hidden='true'
            />
          </div>
        )}
      </div>

      {errors[name] && (
        <p className='mt-1.5 text-sm text-rose-600'>{errors[name].message}</p>
      )}
    </div>
  );
};

export default TInput;
