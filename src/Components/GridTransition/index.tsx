import { useState } from "react"
import clsx from "clsx"

export function GridTransition() {
    const [toggleGrid, setToggleGrid] = useState<boolean>(false)

    return (
        <div
            className={clsx("w-[500px] bg-red-400 transition-[grid] duration-1000 grid grid-cols-[50px_450px]",
                {"transition-[grid] grid-cols-[400px_100px]": toggleGrid}
            )}
        >
            <div className="">1</div>
            <div className="">
                <button
                    className="border"
                    onClick={() => setToggleGrid(prev => !prev)}
                >
                    click me
                </button>
            </div>
        </div>
    )
}