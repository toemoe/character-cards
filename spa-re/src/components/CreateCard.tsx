import { useState } from "react";

interface CreateCardProps {
  closeCreateCardModal: () => void
  onCharacterCreate: (character: { name: string; description: string; image?: string }) => void;
}

const CreateCard = ({closeCreateCardModal, onCharacterCreate}: CreateCardProps) => {
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  })
  const [previewUrl, setPreviewUrl] = useState("")
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCharacter = {
      name: formData.name,
      description: formData.description,
      image: previewUrl // если есть изображение
    };

    onCharacterCreate(newCharacter)
    closeCreateCardModal();
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeCreateCardModal();
    }
  }

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="contentCreateCard" onClick={(event) => event.stopPropagation()}>
          <h2>Card Creation</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Card Name" onChange={(e) => setFormData({...formData, name: e.target.value})} required/>
                <input type="text" placeholder="Card Description" onChange={(e) => setFormData({...formData, description: e.target.value})} required/>
                <input type="file" name="Image Card" onChange={handleImageChange} required/>
                {previewUrl && (
                  <img src={previewUrl} alt="Preview" width="100" />
                )}
                <button type="submit">Create Card</button>
            </form>
      </div>
  </div>
  )
}

export default CreateCard