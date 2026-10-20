import type { ReactNode } from "react";
import { EpitaphLines } from "../epitaph-lines";
import { StatueLiberty } from "../statue-liberty";
import Image from "next/image";

const POEM: ReactNode[][] = [
  [
    "how ridiculous is it not to see THE MAN",
    "number one symbol of a viciously oppressive power structure",
    "a fool who calls himself president of a country",
    "and expresses his worry about the events of past weeks…",
    "yes – it is true",
    "that the hills of kent state are soaked with innocent blood",
    "white, nonpolitical, innocent blood…",
    "it rests heavy in our minds",
    "and we mourn",
  ],
  [
    "but how absurd it seems",
    "that MISTER MAN does not worry about the deaths in augusta",
    "could it possibly be because the blood in augusta was black blood?",
    "and to waste black blood is nothing",
    "to waste black blood is natural",
    "to waste black blood is tradition",
    "could it be?",
    "but they were innocent too!",
    "and their death not less terrifying…",
    "and so it rests heavier in our minds",
    "they were soldiers in our army",
    "and so we mourn in silence… tearless",
    "but with a new determination growing out of our pain",
  ],
  [
    "how utterly bizarre it is that this MAN",
    "who claims to be the leader of a nation",
    "never seems to worry about the thousands of deaths",
    "in the forgotten shadows of babylon",
    "death that comes through poverty – disease – hunger – dope",
    "death that creeps up on us out of the sour smell of garbage",
    "death through mental repression that causes our minds to slowly rot",
    "the kind of dying that destroys our souls",
    "through too much humiliation – hopelessness – despair – exhaustion – fear",
    "we are innocent too…",
    "and the misery of our existence rests eternally in our minds and souls",
    "and we mourn",
    "and we dance on the ruins of our lives",
    "in a wild desperate attempt to survive the pain",
    "to hold off that oncoming insanity",
  ],
  [
    "and we also remember those railroaded",
    "through fascist courts",
    "by wicked arrogant judges",
    "and those chained and shackled",
    "in amerika's stinking dungeons of corruption",
    "for demanding human dignity – respect – freedom",
    "and those forced into exile",
    "restlessly longing for the streets of their childhood",
    "and all those nations and peoples of the earth",
    "choking under the unbearable pressure of racism and exploitation",
    "robbed of their humanity",
    "stripped of their very souls",
    "and those maimed and murdered by fascist bullets",
    "for exposing the truth",
    "about the illnesses and evils of this dying society…",
    "they were innocent too!",
    "and their blood rests heavy in our minds",
    "and we mourn furiously",
    "maddened by unbearable pain",
  ],
  [
    "yes – we HAVE gone mad",
    "and what is going to destroy this whole vicious snakepit",
    "is our army of madmen…",
    "THE MAN is alone now",
    "his slaves and servants and n*****s and asslickers have left him",
    "his women and witches and bitches and ladies and whores have deserted him",
    "his sons and daughters and hippies and yippies no longer want any part of him",
    "our patience has run out",
    "and we cannot afford to give him more time",
    "and in the hottest night",
    "he will feel a strange chill creeping down his spine",
    "when he realizes that the storm that is sweeping the earth",
    "is the storm of total change",
    "of fearless youth",
    "of determination – and joy – and commitment – and love",
    "and solidarity – and pain – and unity – and magic – and wrath…",
    "we want to live",
    "we want to be free",
    "but THE MAN with his warped visions and power",
    "his false standards of courage",
    "his nonexistent concept of humanhood",
    "stands between us and every choice we ever make…",
  ],
  [
    "so – sisters and brothers",
    "later for the dreams",
    "there is work to be done!",
  ],
  ["and for you MAN", "you should not worry", "you should be terrified"],
];

export default function PoemEpitaph() {
  return (
    <section className="relative flex flex-row-reverse items-start justify-end mt-32 lg:ml-72">
      <Image
        src="/lineart-lime.png"
        alt=""
        width={410}
        height={401}
        className="sticky top-12 -ml-62 -z-20"
      />
      <Image
        src="/epitaph.png"
        alt=""
        width={201}
        height={50}
        className="absolute -top-10 left-6 z-20"
      />
      <EpitaphLines>
        {POEM.map((stanza, stanzaIndex) => (
          <p key={stanzaIndex} className="poem-stanza">
            {stanza.map((line, lineInStanza) => (
              <span key={lineInStanza} className="poem-line block">
                {line}
              </span>
            ))}
          </p>
        ))}
      </EpitaphLines>
      <StatueLiberty />
      <Image
        src="/dots.png"
        alt=""
        width={157}
        height={26}
        className="absolute bottom-16 left-4 z-20"
      />
    </section>
  );
}
