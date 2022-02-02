import {
  createContext,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import IForm from '../interface/form';

interface RbContext {
  data: {
    typeOfEnrollment: string;
    dependents: IForm[];
  } | null;
  setData: Dispatch<
    SetStateAction<{
      typeOfEnrollment: string;
      dependents: IForm[];
    } | null>
  >;
}

const DependentContext = createContext<RbContext>({
  data: null,
  setData: () => null,
});

const DependentProvider: FunctionComponent = ({ children }) => {
  const IS_SERVER = typeof window === 'undefined';

  const [data, setData] = useState<{
    typeOfEnrollment: string;
    dependents: IForm[];
  } | null>(
    null ||
      (JSON.parse((!IS_SERVER && localStorage.getItem('data')) || '[]') as {
        typeOfEnrollment: string;
        dependents: IForm[];
      })
  );

  useEffect(() => {
    if (data) {
      localStorage.setItem('data', JSON.stringify(data));
    }
  }, [data]);

  return (
    <DependentContext.Provider value={{ data, setData }}>
      {children}
    </DependentContext.Provider>
  );
};

function useDependent() {
  return useContext(DependentContext);
}

export { DependentProvider, useDependent };
