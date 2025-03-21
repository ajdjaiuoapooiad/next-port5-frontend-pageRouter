import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <Button
          onClick={toggleSidebar}
          className="absolute top-3 right-4 md:hidden"
        >
          {isSidebarOpen ? "✕" : "☰"}
        </Button>
        <div className="grid md:grid-cols-5">
          <aside className="hidden md:block md:col-span-1">
            <Sidebar isSidebarOpen={true} toggleSidebar={() => {}} />
          </aside>
          {isSidebarOpen && (
            <aside className="md:hidden">
              <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              />
            </aside>
          )}
          <main className="md:col-span-4 p-0 md:p-8">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;