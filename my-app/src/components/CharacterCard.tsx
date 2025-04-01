"use client";

import Image from 'next/image';
import { useLikeStore } from "@/store/LikeStore";
import { useControlStore } from "@/store/ControlStore";
import { useInfoStore } from "@/store/InfoStore";

interface Character {
    name: string;
    description: string;
    image: string;
}

export default function CharacterCard({ name, description, image }: Character) {
    const isLiked = useLikeStore((state) => state.charLike.includes(name));
    const toggleLike = useLikeStore((state) => state.toggleLike);

    const isControl = useControlStore((state) => state.controlCards.has(name));
    const toggleControl = useControlStore((state) => state.toggleCard);

    const openInfo = useInfoStore((state) => state.openInfo);

    if (isControl) return null;

    return (
        <div className="card" onClick={() => openInfo({ name, description })}>
            <Image src={image} alt={name} className="character" width={160} height={220} />

            <button className="close_button" onClick={(event) => {
                event.stopPropagation();
                toggleControl(name);
                }}>
                <Image src="/assets/close.png" alt="close" width={20} height={20} />
            </button>

            <div className="info">
                <button className="like_button" onClick={(event) => {
                    event.stopPropagation();
                    toggleLike(name);
                }}> 
                    <Image src={isLiked ? "/assets/active_like.png" : "/assets/like.png"} alt="like" width={19} height={19} />
                </button>
                <p className="name">{name}</p>
            </div>
        </div>
    );
}
