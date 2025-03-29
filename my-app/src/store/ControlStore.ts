import { create } from "zustand";

interface ControlStore {
    controlCards: Set<string>;
    toggleCard: (name: string) => void;
}

export const useControlStore = create<ControlStore>((set) => ({
    controlCards: new Set(),
    toggleCard: (name) =>
        set((state) => {
            const newControlCards = new Set(state.controlCards);
            if (newControlCards.has(name)) {
                newControlCards.delete(name);
            } else {
                newControlCards.add(name);
            }
            return { controlCards: newControlCards };
        })
}));