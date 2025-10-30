import { useState } from "react";
import InfoModal from "./components/InfoModal";
import Header from "./components/layouts/Header";
import Landing from "./components/layouts/Landing";
import { characters as initialCharacters } from "./data/characters";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState(initialCharacters);

  const handleCharacterCreate = (newCharacter: { name: string; description: string; image?: string }) => {
    setCharacters(prev => [...prev, newCharacter]);
  }

  return (
    <main className="main">
      <InfoModal />
      <h1 className="heading">CHARACTER CARDS</h1>
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} onCharacterCreate={handleCharacterCreate}/>
      <Landing searchTerm={searchTerm} characters={characters}/>
    </main>
  );
}