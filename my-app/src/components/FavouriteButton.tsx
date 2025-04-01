"use client";

import Image from 'next/image';
import { useFavouriteStore } from "@/store/FavouriteStore";

export default function FavouriteButton() {
    const showFavourite = useFavouriteStore((state) => state.showFavourite);
    const toggleShowFavourite = useFavouriteStore((state) => state.toggleShowFavourite);

    return (
        <button className="favourite-btn" onClick={toggleShowFavourite}>
            <Image src="/assets/heart_broken.png" alt="heart" className="btn-picture" width={19} height={19} />
            {showFavourite ? "ALL CHARACTERS" : "FAV CHARACTERS"}
        </button>
    );
}