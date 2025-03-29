"use client";

import { useLikeStore } from "@/store/LikeStore";
import { useControlStore } from "@/store/ControlStore";

interface CharacterCardProps {
    name: string;
    image: string;
}

export default function CharacterCard({ name, image }: CharacterCardProps) {
    const isLiked = useLikeStore((state) => state.charLike.includes(name));
    const toggleLike = useLikeStore((state) => state.toggleLike);

    const isControl = useControlStore((state) => state.controlCards.has(name));
    const toggleControl = useControlStore((state) => state.toggleCard);

    if (isControl) return null;

    return (
        <div className="card">
            <img src={image} alt={name} className="character" />

            {/* Кнопка закрытия */}
            <button className="close_button" onClick={() => toggleControl(name)}>
                <img src="/assets/close.png" alt="close" />
            </button>

            <div className="info">
                {/* Кнопка лайка */}
                <button className="like_button" onClick={() => toggleLike(name)}> 
                    <img src={isLiked ? "/assets/active_like.png" : "/assets/like.png"} alt="like" />
                </button>
                <p className="name">{name}</p>
            </div>
        </div>
    );
}
