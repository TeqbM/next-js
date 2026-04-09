import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-gray-900 p-5 border border-slate-700 py-2 sticky top-2 transition-all z-50  border-b rounded-lg">
      <div className="flex justify-between items-center">
        
        <Link className="text-2xl text-slate-400 hover:text-white font-semibold tracking-widest" href="/">
          SH<span className="text-amber-700">i</span>YAL
        </Link>

        <nav className="flex items-center flex-wrap sm:gap-5 gap-2 sm:text-base text-xs [&>_a]:hover:text-amber-700">
          <Link href="/">Home</Link>
          <Link href="/about">about us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/dashboard">Dashboard </Link>
          <Link href="/docs">Docs </Link>
          <Link href="/docs/aa"> Docs A </Link>
          <Link href="/docs/aa/bb"> Docs B </Link>
          <Link href="/contact"> Contact us </Link>
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
  )
}
