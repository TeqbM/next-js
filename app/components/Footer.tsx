export default function Footer(){
     return(
          <footer className="absolute bottom-3 px-3 left-3 right-3 py-3 bg-amber-600 text-center rounded-lg">
               <div className="container mx-auto text-white">
               Copyright © Your Website {new Date().getFullYear()}
               </div>
          </footer>
     )
}
