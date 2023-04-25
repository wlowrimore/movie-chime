import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <div>
      <div>
        <h2 className="text-6xl mb-4">{res.title}</h2>
        <h2 className="text-xl">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="font-semibold bg-green-500 inline-block my-2 py-1 px-2 rounded-md">
          {res.status}
        </h2>
        <Image
          className="my-12 w-full"
          width={1000}
          height={1000}
          src={imagePath + res.backdrop_path}
          priority
        />
        <h2 className="text-lg text-gray-800 font-semibold mt-4 mb-20">
          {res.overview}
        </h2>
      </div>
    </div>
  );
}
