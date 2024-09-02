import { IconContext } from "react-icons";
import { TbArrowBigLeft } from "react-icons/tb";

export default function LeftArrow() {
  return (
    <IconContext.Provider value={{ className: "slider-arrow" }}>
      <TbArrowBigLeft />
    </IconContext.Provider>
  );
}
