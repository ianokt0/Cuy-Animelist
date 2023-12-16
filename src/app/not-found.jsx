"use client"

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter();
    return (
        <div className="min-h-screen max-w-xl mx-auto flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-4">
                <FileSearch size={44} className="text-color-accent" />
                <h3 className="text-color-accent text-4xl font-bold">NOT FOUND 404</h3>
            </div>
            <div className="mt-4">
                <button onClick={() => router.back()} className="text-color-primary hover:text-color-accent underline underline-offset-2">
                    Kembali
                </button>
            </div>
        </div>
    )
}

export default Page