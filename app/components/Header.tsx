"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "Blog", url: "/blog" },
  { name: "Dashboard", url: "/dashboard" },
  { name: "Docs", url: "/docs" },
  { name: "Docs aa", url: "/docs/aa" },
  { name: "Contact", url: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="bg-gray-900 p-5 border border-slate-700 py-2 sticky top-2 transition-all z-50  border-b rounded-lg">
      <div className="flex justify-between items-center">
        <Link
          className="text-2xl text-slate-400 hover:text-white font-semibold tracking-widest"
          href="/"
        >
          SH<span className="text-amber-700">i</span>YAL
        </Link>

        <nav className="flex items-center flex-wrap sm:gap-5 gap-2 sm:text-base text-xs [&>_a]:hover:text-amber-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link
                className={`border-b-2 hover:border-amber-700  ${isActive ? "text-amber-700 border-amber-700" : "border-slate-900 "}`}
                href={link.url}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
          
          <Link
            className="py-2 px-5 inline-block rounded-lg text-amber-600 border border-amber-700 hover:bg-amber-700 hover:!text-white"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="py-2 px-5 inline-block rounded-lg bg-amber-800 border border-amber-700 hover:bg-amber-700 hover:!text-white"
            href="/register"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
