"use client";

import { useLikeStore } from "@/store/LikeStore";
import { useFavouriteStore } from "@/store/FavouriteStore";
import CharacterCard from "@/components/CharacterCard"
import FavouriteButton from "@/components/FavouriteButton";
import InfoModal from "@/components/InfoModal";

export default function Home() {
  const characters = [
    {name: "Maxwell", description: "The former king of the Nightmare Throne and an egomaniac to boot. Maxwell was once the naïve and unimposing William Carter, a penniless man from London who dreamt of being a world-renowned magician. When fate put William in possession of the Codex Umbra, he felt true power for the first time in his life. Casting off his old, meek ways and fully embracing his new persona as a charismatic master of dark magic, Maxwell achieved fame and success, but still found himself hungering for more. As he delved deeper and deeper into his magical tome, immersing himself in its secrets, the dark knowledge within addled his mind and clouded his heart. In his final performance, Maxwell lost control of the shadow magic he'd used so brazenly and both he and his stage assistant Charlie were pulled into the Constant. There he would remain for what seemed like an eternity, tethered to the Nightmare Throne and compelled to ensnare more victims in the Constant's trap. He is still baffled by the thought that someone he tricked into the Constant could find it in their heart to set him free... well, baffled and annoyed really. He never liked owing a favor." },
    {name: "Wendy", description: "Wendy's tale of woe began with the untimely loss of her dear sister Abigail. Unable to accept the thought of life without her twin, Wendy began turning to the occult in the hopes of finding some way to communicate with the other side. After much trial and error, séance candles burned down to nubs and spirit boards thrown away in frustration, Wendy was nearly ready to give up and fall into despair... until finally, there was a sign. A ragtime tune might seem like a strange message to send from the great beyond, but Wendy was desperate to grab hold of anything that might bring her closer to her sister. And sure enough, a voice would soon tell her exactly what she needed to do..." },
    {name: "Webber", description: "Once upon a time, there was a young boy who lived with his family on a small farmstead. Though they lived humbly, the boy's home was filled with love, and he grew up happy and kind. The boy might have lived contentedly for the rest of his days if not for the sudden arrival of an old aquaintance[sic], who came to the house beseeching the boy's father for his expertise on a strange and secretive project..." },
    {name: "Wilson", description: "While toiling away in his home laboratory late one night, Wilson was startled to hear a voice on the radio speaking directly to him. At first he feared he'd gone mad from too many late nights of experiments and accidentally-inhaled chemical fumes, but the voice assured him that it was no mere figment of the imagination. In fact, the voice had a proposition for him: if Wilson would build a machine according to their specifications, then he would be rewarded with secret knowledge, the likes of which no one had ever seen. Casting aside his better judgement [sic] (after all, what harm could come from making a vague bargain with a mysterious disembodied voice?) Wilson threw himself into constructing the machine. When at long last it was finally completed, the gentleman scientist had a moment of hesitation... a moment that might have saved him from his impending fate, had he been just a bit stronger of will. But at the voice's insistence, Wilson flipped the switch and activated his creation... and was never seen again. Well, at least not in this world." },
    {name: "WX-78", description: "WX-78 was the result of an unorthodox experiment helmed by {[LoadEmpathyModLibraryExW()......ERROR_DATA_PATH_NOT_FOUND]} and Robert Wagstaff. The experiment turned out to be a [RESOUNDING SUCCESS], but Wagstaff was [A SHORT SIGHTED FOOL, AFRAID OF PROGRESS] and decided to put a stop to further tests. Adamant that the process that created them could still be perfected, WX refused to give up, continuing their experiments in secret. When Wagstaff discovered what they had been doing, there was a heated argument and01110100 01101111 01101111 00100000 01101100 01100001 01110100 01100101 00100000 01110100 01101111 01101111 00100000 01101100 01100001 01110100 01100101 00100000 01110100 01101111 01101111 00100000 01101100 01100001 01110100 01100101" },
    {name: "Wigfrid", description: "Wigfrid always knew she was meant for the stage. Her debut performance was an instant sensation, launching her from obscurity to overnight stardom. Fans delighted in her portrayal of a noble and fearsome Valkyrie warrior, and she in turn took great pains to fully embody the role. She was perfect for it... perhaps too perfect. Every part she played afterward seemed to fall flat, never again achieving that magical quality that had once drawn audiences to her performances like bees to honey. As Wigfrid’s stardom slowly began to fade, she retreated to the memories of her glory days, losing herself in her fantasies..." },
    {name: "Willow", description: "Willow always regarded being brought to The Constant as a new beginning. It allowed her to leave everything behind, after all. From a young age, Willow seemed to possess a knack for attracting bad luck. Orphaned at a young age and forced to live in a children's home with cruel caregivers, she soon found her nights plagued by shadowy visions of terrible creatures... creatures that could only be held at bay by her faithful teddy bear Bernie. But when Bernie was taken away as punishment for what her caregivers saw as unfit behavior, Willow was left to fend for herself when the shadows came for her. That's when she learned that nothing holds back the darkness like a roaring flame. Nothing is more comforting than watching your troubles light up and crumble to ash... It wouldn't be the last time Willow burned it all down to start anew." },
    {name: "Wagstaff", description: "The radio is a Voxola PR-76, manufactured in 1919 by the Voxola Radio company of Sidney, Ohio. The radio offered revolutionary sound and reception quality for the time, and was promoted by an intense national marketing campaign. Very few units were actually produced, because the factory was destroyed in a fire only days after production began. Voxola founder Robert Wagstaff went missing the night of the fire, and the company declared bankruptcy soon thereafter." },
    {name: "Wickerbottom", description: "When people meet Ms. Wickerbottom, most assume that what you see is what you get. She certainly looks every bit the typical librarian that she claims to be, as at home amongst the bookstacks as any creature in their native habitat. Nobody would raise an eyebrow at such a person being well-versed in a wide range of subjects. Who would spare a second thought if, upon further inquiry, her knowledge rivaled that of experts? And obviously, no one would think of questioning what a librarian might be involved in after hours, when the library doors are closed to the public..." },
  ];

  const likedChar = useLikeStore((state) => state.charLike);
  const showFavourite = useFavouriteStore((state) => state.showFavourite);

  const displayChar = showFavourite ? characters.filter((char) => likedChar.includes(char.name)) : characters;

  return (
    <main className="main">
       <InfoModal />
      <h1 className="heading">CHARACTER CARDS</h1>

      <div className="header">
        <FavouriteButton />
        <input type="text" className="search" placeholder="SEARCH" />
      </div>

      <article className="container">
        <h1 className="h1">DONT STARVE TOGETHER</h1>

        {Array.from({ length: Math.ceil(displayChar.length / 4 ) }).map((_, rowIndex) => (
          <div className="string_cards" key={rowIndex}>
            {displayChar.slice(rowIndex * 4, rowIndex * 4 + 4).map((char) => (
              <CharacterCard key={char.name} name={char.name} description={char.description} image={`/assets/${char.name}.webp`} />
            ))}
          </div>
        ))}
      </article>
    </main>
  );
}
