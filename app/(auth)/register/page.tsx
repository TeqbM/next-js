import Image from "next/image";

export default function Register() {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <h1 className="text-5xl font-semibold text-amber-600 text-center">
            Register
          </h1>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="bg-white border shadow-2xl shadow-slate-700/5 border-slate-200 rounded-2xl overflow-hidden w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-2">
              <div className="border-r border-slate-100">
                <Image
                  className="w-full object-cover"
                  src="/images/login.jpg"
                  alt="logo"
                  width={630}
                  height={370}
                />
              </div>
              <div className="p-7 flex items-center gap-3">
                <form className="w-full flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="w-full">
                      Full Name
                    </label>
                    <input
                      className="w-full py-2 px-3 border border-slate-200 rounded-lg focus:border-slate-700 focus:outline-0"
                      type="text"
                      id="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="w-full">
                      Email Address
                    </label>
                    <input
                      className="w-full py-2 px-3 border border-slate-200 rounded-lg focus:border-slate-700 focus:outline-0"
                      type="email"
                      id="email"
                    />
                  </div>
                  <div>
                    <label className="w-full" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="w-full py-2 px-3 border border-slate-200 rounded-lg focus:border-slate-700 focus:outline-0"
                      type="Password"
                      id="Password"
                    />
                  </div>
                  <div>
                    <label className="w-full" htmlFor="password">
                      Verify Password
                    </label>
                    <input
                      className="w-full py-2 px-3 border border-slate-200 rounded-lg focus:border-slate-700 focus:outline-0"
                      type="Password"
                      id="Password"
                    />
                  </div>
                  <div>
                    <button type="submit">Register ...</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
