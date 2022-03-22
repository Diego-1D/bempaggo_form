import { createContext, useContext, useState } from "react";

export const PlayerContext = createContext({});

export function PlayerContextProvider({ children }) {

    const [stepIndex, setStepIndex] = useState(0);
    const [qtyReact, setQtyReact] = useState(0);
    const [qtyVue, setQtyVue] = useState(0);
    const [qtyAngular, setQtyAngular] = useState(0);

    function nextStep() {
        if (qtyReact === 0 && qtyVue === 0 && qtyAngular === 0) {
            alert("Adicione pelo menos uma quantidade adesivos!");
        }
        else {
            setStepIndex(stepIndex + 1);
        }
    }

    function previousStep() {
        setStepIndex(stepIndex - 1);
    }

    return (
        <PlayerContext.Provider value={{
            stepIndex,
            nextStep,
            previousStep,
            qtyReact, setQtyReact,
            qtyVue, setQtyVue,
            qtyAngular, setQtyAngular
        }}>
            {children}
        </PlayerContext.Provider>

    )
}

export const usePlayer = () => {
    return useContext(PlayerContext);
}