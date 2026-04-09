"use client"

import Link from "next/link";
import { useEffect, useState } from "react";


type Posts ={
  id:number;
  title?:string;
  body?:string;
  userId?:number;
}
export default function Page() {
  
  const [cou, setCou] = useState<number>(12);
  const [data,setData] = useState<Posts[]>([])

  useEffect(()=>{
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();
      setData(posts);
    }
    getData();
  },[])

  return (
    <section className="py-10">
      <div className="container mx-auto">
          
          
          <ul className="grid sm:grid-cols-3 grid-cols-1 gap-3">
            {data?.slice(0,cou).map((item: Posts) => (
              <li className="p-3 cursor-pointer border border-slate-800 hover:border-slate-600 bg-slate-900 rounded-md " key={item.id}>
                <h3 className="text-lg font-semibold text-amber-700">{item.userId}</h3>
                <h3 className="text-lg font-semibold text-amber-700">{item.title}</h3>
                <div> {item.body}</div>
                <Link className="mt-3 bg-slate-700 px-3 py-2 text-sm rounded-md inline-block" href={`/blog/${item.id}`}>Read More...</Link>
              </li>
            ))}
          </ul>
          <div className="text-center mt-5">
            {data?.length >= cou &&
              <button  className="bg-slate-500 py-2 px-5 rounded-md hover:bg-slate-700 cursor-pointer" onClick={()=> setCou(cou+12)}>LoadMore...</button>
            }
          </div>
            
      </div>
    </section>
  );
}