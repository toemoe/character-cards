"use client";

import { useInfoStore } from "../store/InfoStore";

export default function InfoModal() {
    const { selectedChar, isOpen, closeInfo } = useInfoStore();

    if (!selectedChar || !isOpen) return null;

    return (
        <div className="modal" onClick={closeInfo}>
            <div className="contentInfo" onClick={(event) => event.stopPropagation()}>
                <h1>{selectedChar.name}</h1>
                <p>{selectedChar.description}</p>
            </div>
        </div>
    );
}