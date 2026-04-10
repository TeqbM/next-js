import Image from "next/image";

async function getProducts(){
     const res = await fetch('https://dummyjson.com/products');
     return res.json();
}
type Prod ={
     id:number;
     title:string;
     description:string;
     category?:string;
     images:string;
}
export default async function Shop(){
     const {products} = await getProducts();
     console.log(products);
     return(
          <>
               <section className="py-7  ">
                    <div className="container mx-auto">
                         <h1 className="text-5xl font-semibold text-amber-600 text-center">Shop</h1>
                    </div>
               </section>
               <ul className="grid grid-cols-5 gap-5">
                    {products.map((pro:Prod)=> {
                         return (
                              <li key={pro.id} className="rounded-lg overflow-hidden relative border border-slate-200">
                                   <span className="bg-slate-600 border border-slate-900 z-10 px-3 uppercase text-xs py-1 inline-block text-white absolute top-1 right-1 rounded-3xl">
                                        {pro.category}
                                   </span>
                                   <img src={pro.images[0]} alt={pro.title} />
                                   <div className="p-3 bg-white  border-t border-slate-100">
                                        <h3 className="text-slate-800 font-semibold mb-2">{pro.title}</h3>
                                        <div>{pro.description.slice(0,80)}...</div>
                                   </div>
                              </li>
                         )
                    })}
               </ul>
          </>
     )
}