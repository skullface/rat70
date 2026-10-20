import Image from "next/image";
import { BreadAndRosesPhotos } from "../photos";

export default function BreadAndRoses() {
  return (
    <section className="p-12 bg-foreground text-background text-lg -mt-1.5 lg:ml-16 max-w-prose relative">
      <BreadAndRosesPhotos />
      <div className="text-sm font-sans mb-6 [&_a]:underline [&_a]:decoration-(--lime) [&_a]:underline-offset-2 [&_a]:hover:decoration-background/50 text-justify">
        <p>
          In response to the American invasion of Cambodia, the resumption of
          bombing of North Vietnam, the repression of the Panthers, and the
          murders of the Kent State students, Bread and Roses women working with
          other women's groups in the Boston area, decided to have an
          independent women’s action.{" "}
          <a href="https://www.thecrimson.com/article/1970/5/8/500-women-demonstrators-march-through-cambridge/">
            On May 7, 500 women held a rally on Cambridge Commons without a
            permit and marched through Cambridge
          </a>
          , postering and stickering, to Technology Square, a major center of
          military and imperialist research for M.I.T. and Harvard.{" "}
          <a href="https://www.thecrimson.com/article/1970/5/8/boston-strikers-will-rally-here-pboston-area/">
            The next day, the following speech was given by Bread and Roses
            women at a National Student Strike rally at Harvard Stadium
          </a>
          :
        </p>
      </div>

      <Image
        src="/bread-and-roses.png"
        alt=""
        width={900}
        height={100}
        className="invert mb-2"
      />

      <div data-text="speech" className="relative text-justify [&_p]:indent-6">
        <p>
          Women have been fighters not only in political movements; since the
          beginning of the human race, each woman has had to fight, as an
          individual, for her very survival in the face of male brutalization.
          We have been slaves in a world controlled by men: we are housekeepers
          and maids without pay, have all the worst jobs for the worst pay, and
          serve everybody’s needs but our own.
        </p>
        <p>
          Women are becoming a powerful force in and of ourselves. The women’s
          liberation movement is transforming the strength we have had to have
          as individuals in other struggles and in our daily lives into a
          collective strength. We have learned that we cannot postpone the
          struggle for our own particular needs until after the revolution. It
          is because of our rage at our own oppression that we are fighting
          hard. We are angry about the invasion of Cambodia and the repression
          of the Black Panthers, and we are also enraged about what we have to
          face every day in order to survive and stay sane—walking down the
          street, on our jobs, at home and at school.
        </p>
        <p>
          We are told that whenever anything goes wrong, it is our fault; if we
          are afraid or unhappy, they make us feel that we are guilt-ridden
          pieces of shit. It is not paranoid to be afraid of the violence that
          surrounds us. We are beaten and raped on the streets and in our homes
          every day. It is not neurotic to feel like we can’t be a good mother
          to our children when we are taught that we are responsible for the
          health and welfare of our children while decent medical care, housing,
          and education are luxuries reserved for the rich. It is not ungrateful
          to resent being imprisoned in our home when hom is a sink full of
          dirty dishes, a vacuum cleaner, piles of dirty laundry. It is not
          petty to be concerned about a 20 cent rise in the price of hamburger
          meat when we are responsible for making ends meet to insure the
          survival of our family. We are not being piggy, it is not that we want
          more but inflation is making it impossible to meet basic needs. It is
          not frivolous to spend our time and money on clothes and cosmetics
          when it is necessary to decorate ourselves to sell our bodies in the
          job market and to get men. It is not castrating that WE control our
          own lives and bodies. All our lives we have been told that these are
          our own hang-ups, our personal problems. But what more and more
          women—housewives, single women, black, white, working women, welfare
          mothers and students—are rapidly learning is that those men who
          plotted the invasion of Cambodia, who are systematically ripping off
          the Black Panthers, who are responsible for the murders of the
          students at Kent State are the very same men who have enslaved us—by
          trying to destroy our minds and control our bodies, by exploiting our
          labor on the job and in the home. They are the very same men who have
          enslaved us for the purpose of enslaving people the world over.
        </p>
        <p>
          We as women are fighting not just for ourselves but for all people. It
          is through our experiences in our everyday lives of sexism—our
          oppression as women—that we understand in our guts what racism and
          imperialism mean to other oppressed peoples in their everyday lives.
        </p>
        <p>
          We are revolutionary feminists. We are building an independent women’s
          movement to destroy male supremacy. To accomplish that end we must
          fight in solidarity with all other oppressed people because we
          understand that our liberation depends on the total liberation of all
          people.
        </p>
        <p className="opacity-50">[…]</p>
        <p>
          We are women fighting back because we hate what Amerika is. We are
          revolutionary feminists. We are revolutionaries because we believe we
          can win and because we have a vision of a better society. We are
          feminists because it is through our experience as women that we know
          that people can change, as we have changed; and because we believe
          that male supremacy is the original and basic form of domination from
          which all others flow.
        </p>
        <p>
          Our vision of a new society flows from an understanding of how we have
          been and are oppressed. We have been victims of the competitiveness,
          money values, aggressiveness, individualistic ego-tripping, and
          brutality of white male Amerika. To survive in the misery of that
          world we have found each other in the women’s movement and have
          learned to act collectively. Our collective experience has taught us a
          better way to live—and inspired in us a belief that we can build a
          society which is based not only on different economic relations, but
          on a new form of human relations.
        </p>
        <p>
          A Vietnamese parable of Heaven and Hell says something about what we
          mean: Hell, in the Vietnamese legend, is a gorgeous banquet spread
          with mounds of delicious food, only our chopsticks are so long that we
          can’t get any of it up to our mouth. Heaven is the same identical
          banquet—only the people feed each other. POWER TO THE SISTERS!
        </p>
      </div>
    </section>
  );
}
