import { useEffect, useState } from 'react'
import { Opciones } from './Components/Opciones'
import { Armas } from './Components/Armas'
import { determinarGanador } from './js/determinarJugador'
import { Mensaje } from './Components/Mensaje'

function App() {
  const [opcion, setopcion] = useState(0)
  const [opcionpc, setopcionpc] = useState(0)
  const [mensaje,setMensaje] = useState("")

  const evento = (num)=>{

     setopcion(num)
     // Generar un número aleatorio del 1 al 3
    
     setopcionpc(Math.floor(Math.random() * 3) + 1)
     
   
    

  }
  useEffect(()=>{
    if(opcion != 0){
      setMensaje(determinarGanador(opcion,opcionpc))
    }
    
  },[evento])
 

  return (
    <>
      <div className='flex flex-col items-center gap-y-28 bg-sky-500 h-screen justify-center'>
        <Mensaje mensaje={mensaje}/>
       <Opciones opcion = {opcion} opcionpc={opcionpc}/>
       <Armas evento={evento}/>
      </div>
    </>
  )
}

export default App
