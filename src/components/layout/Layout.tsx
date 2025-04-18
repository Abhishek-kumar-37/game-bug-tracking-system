
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(isMobile);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar collapsed={collapsed} toggleCollapse={toggleCollapse} />
      <div className="flex-1 flex flex-col min-h-screen overflow-auto">
        <main className="flex-1">
          <div className="container py-6 max-w-7xl">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
