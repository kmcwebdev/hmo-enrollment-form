import { FormProvider, UseFormReturn } from 'react-hook-form';

interface FormProps {
  useFormReturn: UseFormReturn<any, object>;
  onSubmit: (e: any) => void;
  name?: string;
}

export const Form: React.FC<FormProps> = ({
  useFormReturn,
  children,
  name,
  onSubmit,
}) => {
  const { handleSubmit } = useFormReturn;

  return (
    <FormProvider {...useFormReturn}>
      <form
        className='m-5 space-y-4'
        name={name}
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};
