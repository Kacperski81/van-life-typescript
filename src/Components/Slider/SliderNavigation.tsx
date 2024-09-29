import clsx from "clsx";
import { BsCircleFill, BsCircle } from "react-icons/bs";

type SliderNavigationProps = {
  cardIndex: number;
  activeCardIndex: number;
  setActiveCardIndex: (index: number) => void;
};

export default function SliderNavigation({
  cardIndex,
  activeCardIndex,
  setActiveCardIndex,
}: SliderNavigationProps) {
  const isActive = activeCardIndex === cardIndex;
  return (
    <div
    //   className="xl:rounded-full xl:bg-black"
    className={clsx("xl:rounded-full hover:cursor-pointer")}
      onClick={() => setActiveCardIndex(cardIndex)}
    >
      {/* <p className="xl:w-1 xl:h-1"></p> */}
      {isActive ? <BsCircleFill size={10} /> : <BsCircle size={10}/>}
    </div>
  );
}
