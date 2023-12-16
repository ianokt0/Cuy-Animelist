import Header from "@/components/Dashboard/Header"
import { getAnimeResponse } from "@/libs/api-libs"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Link from "next/link"
import Image from "next/image"


const Page = async () => {
    const user = await authUserSession();
    const collection = await prisma.collection.findMany({ where: { user_email: user.email } })
    return (
        <section className="mt-4 px-4 w-full">
            <Header title={"My Collection"} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {collection.map((collect, index) => {
                    return (
                        <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative rounded-lg group">
                            <Image
                                src={collect.anime_image}
                                alt={collect.anime_image}
                                width={350}
                                height={350}
                                className="w-full rounded-lg" />
                            <div className="w-full absolute flex items-center justify-center bottom-0 bg-color-accent h-16 rounded-b-lg group-hover:rounded-lg">
                                <h5 className="text-xl text-center">
                                    {collect.anime_title}
                                </h5>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Page