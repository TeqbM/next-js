export default function Footer(){
     return(
          <footer className="fixed bottom-3 px-3 left-3 right-3 py-3 bg-amber-600 text-center rounded-lg">
               <div className="container mx-auto">
               Copyright © Your Website {new Date().getFullYear()}
               </div>
          </footer>
     )
}
