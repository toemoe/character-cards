import { useFavouriteStore } from "../store/FavouriteStore";

export default function FavouriteButton() {
    const showFavourite = useFavouriteStore((state) => state.showFavourite);
    const toggleShowFavourite = useFavouriteStore((state) => state.toggleShowFavourite);

    const imageBasePath = '/assets';

    return (
        <button className="favourite-btn" onClick={toggleShowFavourite}>
            <img 
                src={`${imageBasePath}/heart_broken.png`} 
                alt="heart" 
                className="btn-picture" 
                width={21} 
                height={21}
            />
            {showFavourite ? "ALL CHARACTERS" : "FAV CHARACTERS"}
        </button>
    );
}