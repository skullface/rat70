import Image from "next/image";

export function StatueLiberty() {
  return (
    <Image
      src="/statue-liberty.png"
      alt=""
      width={400}
      height={400}
      draggable={false}
      className="absolute -top-32 -z-10 -ml-90 rotate-25"
    />
  );
}
