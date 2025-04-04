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

export default function CharacterCard({ name, description }: Character) {
    const isLiked = useLikeStore((state) => state.charLike.includes(name));
    const toggleLike = useLikeStore((state) => state.toggleLike);
    const isControl = useControlStore((state) => state.controlCards.has(name));
    const toggleControl = useControlStore((state) => state.toggleCard);
    const openInfo = useInfoStore((state) => state.openInfo);

    if (isControl) return null;

    // Базовый путь для изображений
    const imageBasePath = '/character-cards/assets';

    return (
        <div className="card" onClick={() => openInfo({ name, description })}>
            <Image 
                src={`${imageBasePath}/${name}.webp`} 
                alt={name} 
                className="character" 
                width={160} 
                height={220}
            />

            <button 
                className="close_button" 
                onClick={(event) => {
                    event.stopPropagation();
                    toggleControl(name);
                }}
            >
                <Image 
                    src={`${imageBasePath}/close.png`} 
                    alt="close" 
                    width={20} 
                    height={20}
                />
            </button>

            <div className="info">
                <button 
                    className="like_button" 
                    onClick={(event) => {
                        event.stopPropagation();
                        toggleLike(name);
                    }}
                > 
                    <Image 
                        src={`${imageBasePath}/${isLiked ? 'active_like' : 'like'}.png`} 
                        alt="like" 
                        width={19} 
                        height={19}
                    />
                </button>
                <p className="name">{name}</p>
            </div>
        </div>
    );
}