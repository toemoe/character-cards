export default function Home() {
  const characters = [
    "Maxwell", "Wendy", "Webber", "Wilson",
    "WX-78", "Wigfrid", "Wilson", "Willow"
  ];

  return (
    <main className="main">
      <h1 className="heading">CHARACTER CARDS</h1>

      <div className="header">
        <button className="favourite-btn">
          <img src="/assets/heart_broken.png" alt="heart" className="btn-picture" />
          FAVOURITES
        </button>
        <input type="text" className="search" placeholder="SEARCH" />
      </div>

      <article className="container">
        <h1 className="h1">DON'T STARVE TOGETHER</h1>

        {Array.from({ length: 2 }).map((_, rowIndex) => (
          <div className="string_cards" key={rowIndex}>
            {characters.slice(rowIndex * 4, rowIndex * 4 + 4).map((name) => (
              <div className="card" key={name}>
                <img src="/assets/close.png" className="close_button" alt="close" />
                <img src={`/assets/${name}.webp`} className="character" alt={name} />
                <div className="info">
                  <img src="/assets/heart_card3.png" className="like_button" alt="like" />
                  <p className="name">{name}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </article>
    </main>
  );
}
