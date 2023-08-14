import { OpcionYou } from "./OpcionYou"
import { OpcionPc } from "./OpcionPc"
export function Opciones({opcion,opcionpc}){

    return(<div className="flex flex-row items-center gap-x-8">
    <OpcionYou opcion={opcion}/>
    <p className="text-red-500 text-8xl font-bold">VS</p>
    <OpcionPc opcionpc={opcionpc}/>
    </div>)
}