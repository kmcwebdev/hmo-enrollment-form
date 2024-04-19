import type { AppProps } from "next/app";
import React, { useState, ReactElement, ReactNode } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import "../styles/xdatepicker.css";

interface MyPageProps extends AppProps {
  pageProps: {
    dehydratedState?: any;
    [key: string]: any;
  };
}

function MyApp({ Component, pageProps }: MyPageProps) {
  const [queryClient] = useState(() => new QueryClient());

  const renderComponent = (
    Component: ReactNode | ReactElement | null,
    pageProps: any
  ) => {
    if (typeof Component === "function") {
      return <Component {...pageProps} />;
    } else if (React.isValidElement(Component)) {
      return Component;
    }
    return null;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {renderComponent(Component, pageProps)}
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
