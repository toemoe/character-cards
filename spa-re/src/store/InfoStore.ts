import { create } from "zustand";

interface Character {
    name: string;
    description: string;
}

interface InfoStore {
    selectedChar: Character | null;
    isOpen: boolean;
    openInfo: (character: Character) => void;
    closeInfo: () => void;
}

export const useInfoStore = create<InfoStore>((set) => ({
    selectedChar: null,
    isOpen: false,
    openInfo: (character) => set(() => ({ selectedChar: character, isOpen: true })),
    closeInfo: () => set(() => ({ selectedChar: null, isOpen: false })),
}));