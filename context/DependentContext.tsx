import {
  createContext,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext,
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
  const [data, setData] = useState<{
    typeOfEnrollment: string;
    dependents: IForm[];
  } | null>(null);

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
