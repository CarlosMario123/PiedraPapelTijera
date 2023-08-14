import { useEffect, useState } from "react";
import { getImg } from "../js/getImg";

export function OpcionPc({ opcionpc }) {
  const [optionImg, setOptionImg] = useState("");
   


  useEffect(() => {
    // Este código se ejecutará cuando el valor de 'opcion' cambie
    const newOptionImg = getImg(opcionpc);
    setOptionImg(newOptionImg);
  }, [opcionpc]); // El segundo argumento del useEffect es un arreglo de dependencias

  return (
    <>
      <div className="w-40 h-40">
       
        <img src={optionImg} alt="Opción" />
      </div>
    </>
  );
}
