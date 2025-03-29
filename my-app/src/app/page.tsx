"use client";

import { useLikeStore } from "@/store/LikeStore";
import { useFavouriteStore } from "@/store/FavouriteStore";
import CharacterCard from "@/components/CharacterCard"
import FavouriteButton from "@/components/FavouriteButton";


export default function Home() {
  const characters = [
    "Maxwell", "Wendy", "Webber", "Wilson",
    "WX-78", "Wigfrid", "Willow", "Wagstaff",
    "Wickerbottom",
  ];

  const likedChar = useLikeStore((state) => state.charLike);
  const showFavourite = useFavouriteStore((state) => state.showFavourite);

  const displayChar = showFavourite ? characters.filter((name) => likedChar.includes(name)) : characters;

  return (
    <main className="main">
      <h1 className="heading">CHARACTER CARDS</h1>

      <div className="header">
        <FavouriteButton />
        <input type="text" className="search" placeholder="SEARCH" />
      </div>

      <article className="container">
        <h1 className="h1">DONT STARVE TOGETHER</h1>

        {Array.from({ length: Math.ceil(displayChar.length / 4 ) }).map((_, rowIndex) => (
          <div className="string_cards" key={rowIndex}>
            {displayChar.slice(rowIndex * 4, rowIndex * 4 + 4).map((name) => (
              <CharacterCard key={name} name={name} image={`/assets/${name}.webp`} />
            ))}
          </div>
        ))}
      </article>
    </main>
  );
}
