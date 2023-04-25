import Link from "next/link";
import Image from "next/image";

export default function Movie({ id, title, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Link href={`/${id}`}>
        <Image
          width={250}
          height={500}
          src={imagePath + poster_path}
          alt={title}
        />
      </Link>
      <h1 className="font-bold">{title}</h1>
      <h2 className="text-sm">Released: {release_date}</h2>
    </div>
  );
}
