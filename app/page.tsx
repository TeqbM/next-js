import Image from "next/image";

export default function Home() {
  
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="bg-gray-900 p-5 border border-slate-700 rounded-2xl"> 
            <h3 className="text-amber-600 text-2xl font-semibold mb-3">Lorem ipsum dolor sit amet.</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatibus.
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-amber-600 text-2xl text-center mb-7">Lorem, ipsum dolor.</h2>
          <div className="grid grid-cols-3 gap-5">
            <div className="p-5 bg-gray-900 rounded-lg border border-slate-800">
              <h4 className="text-amber-600 text-xl font-semibold mb-2">Lorem, ipsum dolor.</h4>
              <div className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae libero, optio quo praesentium ab autem facere corporis iste maiores pariatur ?
              </div>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg border border-slate-800">
              <h4 className="text-amber-600 text-xl font-semibold mb-2">Lorem, ipsum dolor.</h4>
              <div className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae libero, optio quo praesentium ab autem facere corporis iste maiores pariatur ?
              </div>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg border border-slate-800">
              <h4 className="text-amber-600 text-xl font-semibold mb-2">Lorem, ipsum dolor.</h4>
              <div className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae libero, optio quo praesentium ab autem facere corporis iste maiores pariatur?
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-10">
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-3">
              <div className="rounded-xl transition-all overflow-hidden group border-2 border-slate-500 hover:border-amber-800">
                <Image 
                  className="w-full object-cover max-h-96 transition-all group-hover:scale-110"
                  src="/images/pexels-kubra.jpg"
                  alt="logo"
                  width={630}
                  height={370}
                />
              </div>
              <div className="rounded-xl transition-all overflow-hidden group border-2 border-slate-500 hover:border-amber-800">
                <Image 
                  className="w-full object-cover max-h-96 transition-all group-hover:scale-110"
                  src="/images/pexels-meomupmofilm.jpg"
                  alt="logo"
                  width={630}
                  height={370}
                />
              </div>
              <div className="rounded-xl transition-all overflow-hidden group border-2 border-slate-500 hover:border-amber-800">
                <Image 
                  className="w-full object-cover max-h-96 transition-all group-hover:scale-110"
                  src="/images/pexels-matt-liatkouski.jpg"
                  alt="logo"
                  width={630}
                  height={370}
                />
              </div>
              <div className="rounded-xl transition-all overflow-hidden group border-2 border-slate-500 hover:border-amber-800">
                <Image 
                  className="w-full object-cover max-h-96 transition-all group-hover:scale-110"
                  src="/images/pexels-alaritammsalu.jpg"
                  alt="logo"
                  width={630}
                  height={370}
                />
              </div>
            </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto overflow-hidden">
          <div className="relative flex overflow-x-clip w-auto">
            <div className="w-full flex flex-row whitespace-nowrap animate-marquee">
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet. 8</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
            </div>
            <div className="w-full absolute top-0 whitespace-nowrap flex flex-row animate-marquee2">
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
              <div className="px-2 min-w-[25%]">
                <div className="p-7 text-wrap border bg-slate-800 border-slate-700 group rounded-2xl">
                  <h3 className="mb-3 text-2xl font-semibold text-amber-700">Lorem ipsum dolor sit amet.</h3>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint ratione facilis? Suscipit molestiae mollitia hic molestias, labore recusandae dolore quasi enim consequatur et consectetur, a sint vel nisi sit?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, itaque quaerat aspernatur tempora nobis aut recusandae aperiam ullam reiciendis assumenda corporis in magni unde cupiditate nostrum inventore quo possimus dolorum?
            </div>
        </div>
      </section>
    </>
  );
}
