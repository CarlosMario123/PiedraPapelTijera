export function getImg(num){
    let valor = "https://img.freepik.com/vector-premium/signo-interrogacion-rojo-grande_122818-781.jpg?w=2000";

    switch(num){
        case 1:
           valor =  "https://w7.pngwing.com/pngs/235/345/png-transparent-scape-others-miscellaneous-image-file-formats-photography.png";
        break;

        case 2:
            valor =  "https://e7.pngegg.com/pngimages/418/753/png-clipart-yellow-scissors-scissors-computer-file-scissors-rock-paper-scissors-scissors-hair-thumbnail.png";
         break;

         case 3:
            valor =  "https://w7.pngwing.com/pngs/153/807/png-transparent-paper-printing-creased-white-paper-texture-angle-white-thumbnail.png";
         break;
     
         
    }
    return valor;
   
}