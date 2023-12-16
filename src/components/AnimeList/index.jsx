import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link
            className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
            href={`/anime/${anime.mal_id}`}
            key={index}
          >
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={350} height={350}
              className="w-full max-h-64 object-cover rounded-t-xl" />
            <h1 className="font-bold md:text-xl text-md p-4">{anime.title}</h1>
          </Link>
        )
      })}
    </div>
  );
};

export default AnimeList;
