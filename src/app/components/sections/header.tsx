import Image from "next/image";

export default async function Header() {
  return (
    <Image
      src="/title.png"
      alt=""
      width={160}
      height={95}
      className="absolute top-8 left-8"
    />
  );
}
