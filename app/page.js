import Image from "next/image";
import Movie from "./Movie";
import Poster from "./Poster";

export default async function Home() {
  const imagePath = "https://image.tmdb.org/t/p/original";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  // fetch backdrops
  const bdData = await fetch(
    `https://api.themoviedb.org/3/movie/550/images?api_key=${process.env.API_KEY}&language=en-US&include_image_language=en,null
    `
  );
  const bdres = await bdData.json();
  const backdrops = bdres.backdrops.map((backdrop) => {
    return backdrop.file_path;
  });
  // const coverImage = backdrops.forEach((backdrop, index) => {
  //   console.log(
  //     `Your image path is: ${imagePath + backdrop}, your index is ${index}`
  //   );
  // });

  function getRandomItem(backdrops) {
    // const coverImage = imagePath + backdrops;
    const randomIndex = Math.floor(Math.random() * backdrops.length);
    const item = backdrops[randomIndex];
    return item;
  }
  const result = getRandomItem(backdrops);
  const coverImage = imagePath + result;
  // console.log(backdrops);

  // const Slideshow = ({ backdrops }) => {
  //   const [index, setIndex] = useState(0);

  //   const next = () => {
  //     if (index === backdrops.length - 1) {
  //       setIndex(0);
  //     } else {
  //       setIndex(index + 1);
  //     }
  //   };

  //   const prev = () => {
  //     if (index === 0) {
  //       setIndex(backdrops.length - 1);
  //     } else {
  //       setIndex(index - 1);
  //     }
  //   };
  // };

  return (
    <main>
      <div className="mr-4 bg-[#1f1f1f]">
        <Poster coverImage={coverImage} />
      </div>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
