import { IconContext } from "react-icons";
import { BiSolidNoEntry } from "react-icons/bi";

export default function NoTurn() {
  return (
    <IconContext.Provider value={{ className: "slider-no-turn-arrow" }}>
      <BiSolidNoEntry />
    </IconContext.Provider>
  );
}
