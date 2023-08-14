

export function Mensaje({mensaje}){
     
    
   return (<div>
     <p className={`font-bold text-4xl ${mensaje == "Haz ganado"? "text-yellow-300  bg-blue-700 p-3 rounded-md" : "text-white bg-blue-700 p-3 rounded-md"}`}>{mensaje}</p>
   </div>)
}