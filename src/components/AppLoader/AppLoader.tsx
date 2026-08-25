import { useEffect, useState } from 'react';

import { Loader } from '../Loader/Loader';

type AppLoaderProps = {
  children: React.ReactNode;
};

export const AppLoader = ({ children }: AppLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return children;
};
