import Image from "next/image"
import Link from "next/link"
import ArrowSquareLeft from "@phosphor-icons/react"
const Page = () => {
    return (
        <section classNam="mt-4 w-full">
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/" className="border-2 border-color-accent relative">
                    <Image src="" alt="" width={350} height={350} className="w-full" />
                    <div className="w-full absolute flex items-center justify-center bottom-0 bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-color-accent relative">
                    <Image src="" alt="" width={350} height={350} className="w-full" />
                    <div className="w-full absolute flex items-center justify-center bottom-0 bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-color-accent relative">
                    <Image src="" alt="" width={350} height={350} className="w-full" />
                    <div className="w-full absolute flex items-center justify-center bottom-0 bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-color-accent relative">
                    <Image src="" alt="" width={350} height={350} className="w-full" />
                    <div className="w-full absolute flex items-center justify-center bottom-0 bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime</h5>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Page