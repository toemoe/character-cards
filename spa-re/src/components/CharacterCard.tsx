"use client";

import { useLikeStore } from "../store/LikeStore";
import { useControlStore } from "../store/ControlStore";
import { useInfoStore } from "../store/InfoStore";

interface Character {
    name: string;
    description: string;
}

export default function CharacterCard({ name, description }: Character) {
    const isLiked = useLikeStore((state) => state.charLike.includes(name));
    const toggleLike = useLikeStore((state) => state.toggleLike);
    const isControl = useControlStore((state) => state.controlCards.has(name));
    const toggleControl = useControlStore((state) => state.toggleCard);
    const openInfo = useInfoStore((state) => state.openInfo);

    if (isControl) return null;

    const characterImage = `/assets/${name}.webp`;
    const closeImage = '/assets/close.png';
    const likeImage = `/assets/${isLiked ? 'active_like' : 'like'}.png`;

    return (
        <div className="card" onClick={() => openInfo({ name, description })}>
            <img 
                src={characterImage} 
                alt={name} 
                className="character" 
                width={160} 
                height={220}
            />

            <button className="close_button" onClick={(event) => {
                event.stopPropagation();
                toggleControl(name);
            }}>
                <img src={closeImage} alt="close" width={20} height={20}/>
            </button>

            <div className="info">
                <button className="like_button" onClick={(event) => {
                    event.stopPropagation();
                    toggleLike(name);
                }}> 
                    <img src={likeImage} alt="like" width={19} height={19}/>
                </button>
                <p className="name">{name}</p>
            </div>
        </div>
    );
}