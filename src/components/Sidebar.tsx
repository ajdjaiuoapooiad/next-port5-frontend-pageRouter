import links from "@/utils/links";
import { Button } from "./ui/button";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="py-4 px-8 bg-gray-800 text-white h-full ">
      <h1 className="text-2xl font-semibold mb-8 text-center">メニュー</h1>
      <div className="flex flex-col gap-y-4">
        {links.map((link: any) => (
          <Button
            asChild
            key={link.href}
            className="flex items-center justify-start gap-x-2 p-3 rounded-md hover:bg-gray-700 transition-colors"
          >
            <Link href={link.href} className="flex items-center gap-x-2 w-full">
              {link.icon}
              <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;