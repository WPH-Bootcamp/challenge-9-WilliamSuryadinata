import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-1 mt-16 md:mt-20 w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
