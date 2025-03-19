import links from "@/utils/links";
import Link from "next/link";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <div>
        <h1>Sidebar</h1>
        <aside className='py-4 px-8 bg-muted h-full'>
          <div className='flex flex-col mt-20 gap-y-4'>
            {links.map((link: any) => {
              return (
                  <Link href={link.href} className='flex items-center gap-x-2 '>
                    <Button className='w-full'>
                    {link.icon} <span className='capitalize'>{link.label}</span>
                    </Button>
                  </Link>
              );
            })}
          </div>
        </aside>
    </div>
  )
}

export default Sidebar