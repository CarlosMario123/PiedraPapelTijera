import { Arma } from "./arma";
export function Armas({ evento }) {
  return (
    <div className="flex flex-row w-1/2 justify-evenly">
      <Arma
        inicial={1}
        imagen={
          "https://w7.pngwing.com/pngs/235/345/png-transparent-scape-others-miscellaneous-image-file-formats-photography.png"
        }
        evento={evento}
      />
      <Arma
        inicial={2}
        imagen={
          "https://e7.pngegg.com/pngimages/418/753/png-clipart-yellow-scissors-scissors-computer-file-scissors-rock-paper-scissors-scissors-hair-thumbnail.png"
        }
        evento={evento}
      />
      <Arma
        inicial={3}
        imagen={
          "https://w7.pngwing.com/pngs/153/807/png-transparent-paper-printing-creased-white-paper-texture-angle-white-thumbnail.png"
        }
        evento={evento}
      />
    </div>
  );
}
