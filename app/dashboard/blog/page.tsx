async function getData() {
  const res = await fetch("https://api.vercel.app/blog");
  return res.json();
}
type Posts ={
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string
}


export default async function Page() {
  const data = await getData();

  return (
    <div className="w-full">
        <ul className="grid grid-cols-3 gap-3">
          {data.map((item: Posts) => (
            <li className="space-y-2 p-3 cursor-pointer border border-slate-800 hover:border-slate-600 bg-slate-900 rounded-md relative" key={item.id}>
              <div className="absolute text-xs top-2 right-2 bg-slate-800 border border-slate-700 py-1 px-2 rounded-full"> 
                <span className="text-amber-700 font-semibold">{item.id}:</span> {item.category}
                </div>
              <h3 className="pt-7 text-lg font-semibold text-amber-700">{item.title}</h3>
              <div> {item.content}</div>
              <div> {item.author}</div>
              <div> {item.date}</div>
            </li>
          ))}
        </ul>
    </div>
  );
}