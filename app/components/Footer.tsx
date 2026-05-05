export default function Footer(){
     return(
          <footer className="py-3 bg-amber-600 text-center rounded-lg">
               <div className="container mx-auto text-white">
               Copyright © Your Website {new Date().getFullYear()}
               </div>
          </footer>
     )
}
