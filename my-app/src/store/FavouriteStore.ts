import { create } from "zustand";

interface FavouriteStore {
    favouriteCards: string[];
    toggleFavourite: (name: string) => void;
    showFavourite: boolean;
    toggleShowFavourite: () => void;
}

export const useFavouriteStore = create<FavouriteStore>((set) => ({
    favouriteCards: [],
    showFavourite: false,

    toggleFavourite: (name) =>
        set((state) => ({
            favouriteCards: state.favouriteCards.includes(name)
                ? state.favouriteCards.filter((char) => char !== name)
                : [...state.favouriteCards, name],
        })),

    toggleShowFavourite: () =>
        set((state) => ({ showFavourite: !state.showFavourite })),
}));
