"use client";

import { useFavouriteStore } from "@/store/FavouriteStore";

export default function FavouriteButton() {
    const showFavourite = useFavouriteStore((state) => state.showFavourite);
    const toggleShowFavourite = useFavouriteStore((state) => state.toggleShowFavourite);

    return (
        <button className="favourite-btn" onClick={toggleShowFavourite}>
            <img src="/assets/heart_broken.png" alt="heart" className="btn-picture" />
            {showFavourite ? "ALL CHARACTERS" : "FAV CHARACTERS"}
        </button>
    );
}