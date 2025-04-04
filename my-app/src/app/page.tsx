"use client";

import { useState } from "react";
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
    {name: "Wes", description: "Despite a life plagued by terrible luck, Wes has never been one to utter so much as a word of complaint. Rather than dwell on his own troubles, he has instead dedicated his life to making others smile... even if it's at his own expense. His journey to the Constant itself was nothing if not a tragic comedy of errors. After a series of snowballing missteps, Wes found himself accidentally taking the place of a stranger caught in the grip of a shadowy portal bound for the Constant. His unexpected arrival infuriated the Nightmare King, who quickly exacted his vengeance on the poor mime for interfering with his plans. Wes was banished to his own private prison, far from sight, where he would remain until he was rescued by the Constant's other Survivors being the kind soul that he is, Wes holds no grudge against Maxwell... though he does continue to give him the silent treatment. Had Wes known what fate awaited him on his last day on Earth, he likely wouldn't have done anything differently. In truth, there is a part of him that is happy to be in the Constant with the other Survivors - for who could be in greater need of cheering up than those poor souls?" },
    {name: "Woodie", description: "Hailing from the pine-covered mountains of the great white north, Woodie is an unassuming yet strangely mysterious man who keeps his past close to the vest (or in his case, the flannel). He is never seen without his signature bushy beard or trusty axe Lucy, who herself is a bit of an enigma. The other Survivors are not quite sure whether Woodie is simply mad, or if there might be something else to the seemingly inanimate object. Sometimes they swear they can hear a jovial female voice speaking to Woodie when no one else is around..." },
    {name: "Wolfgang", description: "Prior to his time in the Constant, Wolfgang's life revolved around one single-minded pursuit of one goal: to become the strongest man there ever was. His quest would lead him across Europe and eventually even across the Atlantic to America, where his feat of muscular prowess caught the attention of Misters Abernethy & Parker, who invited him to headline in their newly-formed traveling circus. Wolfgang quickly found himself caught up in the pageantry of circus life, and his attention began to shift to finding ways to make his show more spectacular. Fearing his own strength wouldn't be enough to keep impressing the crowds, he started employing a bit of stage trickery, with each new act becoming more unbelievable than the last. As his act grew more outlandish, the risk of being exposed as a fraud grew, and as he suffered one embarassing mistake after another his once unshakeable confidence in his abilities was slowly chipped away."},
    {name: "Wormwood", description: "A green gem fell from the moon, landing on an ancient stone monument in the middle of overgrown rubble. Over a long period of time, a vine encircled the gem and eventually formed a humanoid figure sitting on the monument. The figure, Wormwood, opened his eyes and looked at his hands. He admired the tropical scenery, mimicking the flapping wings of the Butterflies with his leaf fingers. Trying to fit in, he imitated Parrots and Pogs, but he scared them off. Feeling downtrodden, he sat at the base of the monument and tucked himself under a nearby vine. He gave it a pat and smiled to himself. He went to sleep and bloomed along with the nearby plants while under the full moon."},
    {name: "Warly", description: "Warly left a promising career as a sous chef in Paris to return home and care for his aging mother Angeline, whose memory had begun to deteriorate. His world soon revolved around telling her stories about her life, playing her favorite music, cooking the recipes she had taught him when he was young... all in the hopes of catching that spark of recognition in her eyes. As time went on and Angeline's moments of clarity became fewer and farther in-between, Warly became more desperate, willing to try anything to bring back his beloved Maman... That was when he first started hearing the voice on the radio."},
    {name: "Woodlegs", description: "“Me pirate sense be tinglin'.”"},
    {name: "Wilba", description: "”ADVENTURE LIE'ETH YONDER!”"},
    {name: "Walani", description: "“I AM A FORCE TO BE RECKONED WITH!”"},
    {name: "Wheeler", description: "“You haven't heard the last of Maybelle Dorothea Wheeler!”"}
  ];

  const likedChar = useLikeStore((state) => state.charLike);
  const showFavourite = useFavouriteStore((state) => state.showFavourite);

  const [searchTerm, setSearchTerm] = useState("");
  const displayChar = showFavourite ? characters.filter((char) => likedChar.includes(char.name)) : characters;

  const filterChar = displayChar.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const imageBasePath = '/character-cards/assets';

return (
  <main className="main">
    <InfoModal />
    <h1 className="heading">CHARACTER CARDS</h1>

    <div className="header">
      <FavouriteButton />
      <input 
        type="text" 
        className="search" 
        placeholder="SEARCH" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} />
    </div>

    <article className="container">
      <h1 className="h1">DONT STARVE TOGETHER</h1>

      {filterChar.length === 0 ? (
        <p className="not_found">CHARACTERS NOT FOUND</p>
      ) : (
        Array.from({ length: Math.ceil(filterChar.length / 4) }).map((_, rowIndex) => (
          <div className="string_cards" key={rowIndex}>
            {filterChar.slice(rowIndex * 4, rowIndex * 4 + 4).map((char) => (
              <CharacterCard 
                key={char.name} 
                name={char.name} 
                description={char.description} 
                image={`${imageBasePath}/${char.name}.webp`} />
              ))}
          </div>
        ))
      )}
    </article>
  </main>
);
}