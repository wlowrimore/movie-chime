import Link from "next/link";
import Image from "next/image";

export default function Poster({ coverImage }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Image
        className="w-full my-12 p-20"
        width={1000}
        height={1000}
        src={coverImage}
        alt="movie still"
        priority
      />
    </div>
  );
}
