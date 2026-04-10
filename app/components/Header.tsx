"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "Shop", url: "/shop" },
  { name: "Blog", url: "/blog" },
  { name: "Dashboard", url: "/dashboard" },
  { name: "Docs", url: "/docs" },
  { name: "Docs aa", url: "/docs/aa" },
  { name: "Contact", url: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="bg-white p-5 py-2 sticky top-2 transition-all z-50 rounded-lg border border-slate-200/50  0 shadow-lg shadow-slate-700/5">
      <div className="flex justify-between items-center">
        <Link
          className="text-2xl text-slate-800 hover:text-amber-700 font-medium tracking-wider"
          href="/"
        >
          SH<span className="text-amber-700">i</span>YAL
        </Link>

        <nav className="flex items-center flex-wrap sm:gap-7 gap-2 sm:text-base text-xs">
          {navLinks.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link
                className={`text-slate-400 hover:text-slate-800 transition-all hover:scale-110 ${isActive ? "!text-slate-800 scale-110" : ""}`}
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
            className="py-2 px-5 inline-block rounded-lg bg-amber-700 border border-amber-600 hover:bg-amber-600 text-white"
            href="/register"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
