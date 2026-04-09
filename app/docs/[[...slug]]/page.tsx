export default async function Docs({
     params
}:  {
     params: Promise<{slug:string[]}>; 
}){
     const {slug} = await params;

    if(slug?.length === 2){
     return <div> docs page  B slug {slug[0]}  and Conept {slug[1]}</div>
    }else if(slug?.length === 1){
     return <div> docs page  A slug {slug[0]}</div>
    }
    return <div> docs page </div>
}