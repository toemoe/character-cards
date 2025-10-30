import CharacterCard from "../CharacterCard";
import { useLikeStore } from "../../store/LikeStore";
import { useFavouriteStore } from "../../store/FavouriteStore";

interface LandingProps {
  searchTerm: string;
  characters: Array<{ name: string; description: string; image?: string }>;
}

const Landing = ({searchTerm, characters}: LandingProps) => {
  const likedChar = useLikeStore((state) => state.charLike);
  const showFavourite = useFavouriteStore((state) => state.showFavourite);
  const displayChar = showFavourite ? characters.filter((char) => likedChar.includes(char.name)) : characters;

  const filterChar = displayChar.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <article className="container">
    <h1 className="h1">DONT STARVE TOGETHER</h1>

    {filterChar.length === 0 ? (
      <p className="not_found">CHARACTERS NOT FOUND</p>
    ) : (
      Array.from({ length: Math.ceil(filterChar.length / 4) }).map((_, rowIndex) => (
        <div className="string_cards" key={rowIndex}>
          {filterChar.slice(rowIndex * 4, rowIndex * 4 + 4).map((char) => (
            <CharacterCard 
              key={char.name} 
              name={char.name} 
              description={char.description}
              image={char.image}
            />
          ))}
        </div>
      ))
    )}
  </article>
  )
}

export default Landing