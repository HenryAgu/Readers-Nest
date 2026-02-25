import { MenuType } from "@/type";
import Image from "next/image";
import Link from "next/link";

const footerMenu: MenuType[] = [
  { title: "About", path: "/about" },
  { title: "FAQ", path: "/faq" },
  { title: "Contact", path: "/contact" },
  { title: "Privacy", path: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-[#F5F5F4] border-t border-t-[#E7E5E4] flex lg:flex-row flex-col gap-y-4 items-center justify-between">
      <Image
        src="/logo.svg"
        alt="logo"
        width={145}
        height={28}
        className="aspect-145/28"
      />
      <ul className="flex space-x-6">
        {footerMenu.map((menu) => (
          <li className="text-base font-normal text-[#78716C]" key={menu.title}>
            <Link href={menu.path}>{menu.title}</Link>
          </li>
        ))}
      </ul>
      <p className="text-sm text-[#78716C]">© 2024 ReadersNest.</p>
    </footer>
  );
};

export default Footer;
