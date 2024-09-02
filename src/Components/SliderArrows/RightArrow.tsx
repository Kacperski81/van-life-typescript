import { IconContext } from "react-icons";
import { TbArrowBigRight } from "react-icons/tb";

export default function RightArrow() {
    return (
        <IconContext.Provider value={{ className: "slider-arrow"}}>
            <TbArrowBigRight />
        </IconContext.Provider>
    )
}