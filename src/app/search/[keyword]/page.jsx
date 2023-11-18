import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params
  const decodedKeyoword = decodeURI(keyword)
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyoword}`
  // );
  // const searchAnime = await response.json();

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyoword}`)
  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${decodedKeyoword} ...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
