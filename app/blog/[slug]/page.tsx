import Link from "next/link";
import { Metadata } from "next";
async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  return res.json();
}

type Props = {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> => {
  const slug = (await params).slug;
  console.log(slug);
  return {
    title :`Blog title is ${slug.split('-').join(" ")}`,
    description:slug.split('-').join(" ")

  }
}

export default async function BlogPostPage({params}: Props) {
  const { slug } = await params;

  const data = await getData();
  const findTitle = data.find((itm:{title:string}) => itm.title === slug.split('-').join(" "))

  const  {id, title, body} = findTitle;

 
  return (
    <section className="py-10">
      <div className="container mx-auto">
      <div className="w-full max-w-2xl mx-auto">
        <div className="p-7 bg-white border border-slate-200 rounded-2xl rounded-bl-none">
          <h5 className="text-amber-700 font-semibold">{id}</h5>
          <h1 className="text-3xl font-semibold my-3">{title}</h1>
          <div>{body}</div>
        </div>
        <div className="text-center mt-7">
          <Link href="/blog" className="!text-base btn"> Back to Blog... </Link>
        </div>
      </div>
      </div>
    </section>
  )
}