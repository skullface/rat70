import Image from "next/image";

export default function PresentFuture() {
  return (
    <section className="relative lg:ml-8 mt-24 mb-60">
      <Image
        src="/present-future.png"
        alt="The present is struggle. The future is ours."
        width={776}
        height={968}
        className="relative"
      />
      <Image
        src="/present-future.gif"
        alt="The present is struggle. The future is ours."
        width={776}
        height={968}
        className="absolute top-1 left-1 -z-10"
      />
    </section>
  );
}
