import { create } from "zustand";

interface LikeStore {
  charLike: string[];
  toggleLike: (name: string) => void;
}

export const useLikeStore = create<LikeStore>((set) => ({
  charLike: [],
  toggleLike: (name) =>
    set((state) => ({
      charLike: state.charLike.includes(name)
        ? state.charLike.filter((char) => char !== name)
        : [...state.charLike, name],
    })),
}));
