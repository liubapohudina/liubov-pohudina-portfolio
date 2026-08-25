import type { ReactNode } from 'react';

import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { ParallaxBackground } from '../../components/ParallaxBackground/ParallaxBackground';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030706]">
      <ParallaxBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </div>
    </div>
  );
};
