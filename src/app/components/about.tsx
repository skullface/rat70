import Image from "next/image";

export default async function Bibliography() {
  return (
    <section>
      <div className="max-w-prose p-12 lg:ml-16 mb-6 font-sans bg-(--lime) text-foreground grid grid-cols-1 gap-6">
        <p>
          <i>RAT</i>, short for <i>RAT Subterranean News</i> and later{" "}
          <i>Women’s LibeRATion</i>, was created in March 1968 in as New York
          City’s second underground newspaper. Its first women-only issue was
          published in January 1970 as one of the first publications of
          second-wave feminism, notably further hard-left than its
          contemporaries.
        </p>

        <div className="flex flex-col lg:flex-row gap-4">
          <p>
            Images and text on this page sourced from the “May 22–June 4, 1970”
            issue of RAT, courtesy of the{" "}
            <a
              href="https://rozsixties.unl.edu/items/show/718"
              className="underline decoration-(--foreground)/25 hover:decoration-background decoration-1 underline-offset-2 hover:text-background"
            >
              <i>Roz Payne Sixties Archive</i>
            </a>
            , except for the Bread and Roses speech image copyright Jeff
            Albertson.
          </p>
          <Image
            src="/publication.png"
            alt=""
            width={221}
            height={100}
            className="shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
