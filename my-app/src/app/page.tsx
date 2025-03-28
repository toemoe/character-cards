import CharacterCard from "@/components/CharacterCard"

export default function Home() {
  const characters = [
    "Maxwell", "Wendy", "Webber", "Wilson",
    "WX-78", "Wigfrid", "Willow", "Wagstaff",
  ];

  return (
    <main className="main">
      <h1 className="heading">CHARACTER CARDS</h1>

      <div className="header">
        <button className="favourite-btn">
          <img src="/assets/heart_broken.png" alt="heart" className="btn-picture"/>
          FAVOURITES
        </button>
        <input type="text" className="search" placeholder="SEARCH" />
      </div>

      <article className="container">
        <h1 className="h1">DONT STARVE TOGETHER</h1>

        {Array.from({ length: 2 }).map((_, rowIndex) => (
          <div className="string_cards" key={rowIndex}>
            {characters.slice(rowIndex * 4, rowIndex * 4 + 4).map((name) => (
              <CharacterCard key={name} name={name} image={`/assets/${name}.webp`} />
            ))}
          </div>
        ))}
      </article>
    </main>
  );
}
