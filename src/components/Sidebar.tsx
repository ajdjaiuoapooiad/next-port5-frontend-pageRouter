import linksData from "@/utils/links";
import Link from "next/link";
import { Button } from "./ui/button";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

type LinkItem = {
  href: string;
  icon: ReactNode;
  label: string;
};

type SidebarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const links: LinkItem[] = linksData;

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const router = useRouter();

  if (!isSidebarOpen) {
    return null;
  }
  return (
    <aside
      className={`md:col-span-1 w-full top-0 h-screen bg-gray-800 text-white p-4 md:bg-gray-300 md:text-gray-800 transition-transform duration-300 ease-in-out md:shadow-md md:h-screen ${ // md:h-screenに変更
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="relative py-4 px-8 h-full">
        <div className="flex flex-col mt-20 gap-y-4">
          {links.map((link) => {
            return (
              <Link key={link.href} href={link.href} className="flex items-center gap-x-2">
                <Button className="w-full">
                  {link.icon} <span className="capitalize">{link.label}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;