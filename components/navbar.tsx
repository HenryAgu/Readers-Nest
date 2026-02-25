import Image from "next/image";
import Link from "next/link";
import MenuIcon from "./icons/menu";
import { MenuType } from "../type";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navMenus: MenuType[] = [
  { title: "How It Works", path: "/how-it-works" },
  { title: "All Books", path: "/books" },
  { title: "Blog", path: "/blog" },
];

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="fixed top-0 left-0 right-0 px-5 lg:px-8 py-4 flex items-center justify-between border-b border-b-[#E7E5E4] backdrop-blur-md bg-[#FAF9F6CC] z-50">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={173}
            height={32}
            alt="ReadersNest Logo aspect-173/32"
          />
        </Link>
        <ul className="hidden lg:flex space-x-6">
          {navMenus.map((menu) => (
            <li key={menu.title}>
              <Link
                href={menu.path}
                className="font-medium text-base text-black-250"
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/join"
          className="bg-primary py-2 px-6 rounded-full text-base font-medium text-white lg:block hidden"
        >
          Join Now
        </Link>
        <Sheet>
          <SheetTrigger className="flex lg:hidden ">
            <MenuIcon className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="top">
            <ul className="flex flex-col justify-center items-center text-center h-[50vh] gap-y-6">
              {navMenus.map((menu) => (
                <li key={menu.title}>
                  <Link
                    href={menu.path}
                    className="font-medium text-2xl text-black-250"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
