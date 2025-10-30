import FavouriteButton from "../FavouriteButton";
import CreateCard from "../CreateCard";
import { useState } from "react";

interface HeaderProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  onCharacterCreate: (character: { name: string; description: string; image?: string }) => void;
  searchTerm: string;
}

const Header = ({searchTerm, setSearchTerm, onCharacterCreate}: HeaderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openCreateCardModal = () => {
    setIsOpenModal(true)
  }

  const closeCreateCardModal = () => {
    setIsOpenModal(false)
  }


  return (
    <div className="header">
      <FavouriteButton />
      <button onClick={openCreateCardModal} className="favourite-btn">CREATE CARD</button>
      <input 
        type="text" 
        className="search" 
        placeholder="SEARCH" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      {isOpenModal && <CreateCard closeCreateCardModal={closeCreateCardModal} onCharacterCreate={onCharacterCreate}/> }
  </div>
  )
}

export default Header;