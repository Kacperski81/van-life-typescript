import { createContext } from "../create-context";
import { HostState, ChangeIncomeDaysAction } from "../reducer/reducer";
// import { VanType } from "../types";

// type HostType = {
//     incomeDays: number;
//     // vanType: string;
//     setIncomeDays: React.Dispatch<React.SetStateAction<number>>
//     // setVanType: React.Dispatch<React.SetStateAction<string>>
// }

type HostType = {
    state: HostState;
    dispatch: React.Dispatch<ChangeIncomeDaysAction>
}

const [useHost, HostProvider] = createContext<HostType>();

export { useHost, HostProvider };

