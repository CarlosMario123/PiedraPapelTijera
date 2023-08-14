import { useState } from "react";

export function Arma({inicial,imagen,evento}){
  const[valor,setvalor] = useState(inicial);

   const getvalue = ()=> evento(valor)

    return(<>
      <button className="w-32 border border-1 border-black rounded-full overflow-hidden h-32" onClick={getvalue}>
        <img src={imagen}/>
      </button>
    </>)
    
}