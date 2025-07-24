import { createContext, useContext } from "react";
import { teamDataStore } from "./TeamDataStore";

export const StoreContext = createContext({ teamDataStore });

export const useStore = () => useContext(StoreContext);
