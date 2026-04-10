import Loginform from "@/app/components/Loginform";
import Image from "next/image";

export default function Login() {
  return (
    <>
    <section className="py-7  ">
      <div className="container mx-auto">
          <h1 className="text-5xl font-semibold text-amber-600 text-center">Login</h1>
      </div>
    </section>

    <section className="py-12">
      <div className="container mx-auto">
        <div className="bg-white border shadow-2xl shadow-slate-700/5 border-slate-200 rounded-2xl overflow-hidden w-full max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 grid-cols-1">
            <div className="border-r border-slate-100 sm:block hidden">
              <Image 
                className="w-full object-cover"
                src="/images/login.jpg"
                alt="logo"
                width={630}
                height={370}
              />
            </div>
            <div className="p-7 flex items-center">
              <Loginform />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
