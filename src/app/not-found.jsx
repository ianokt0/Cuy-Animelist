"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-4">
                <FileSearch size={44} className="text-color-accent" />
                <h3 className="text-color-accent text-4xl font-bold">NOT FOUND 404</h3>
            </div>
            <div className="mt-4">
                <Link href='/' className="text-color-primary hover:text-color-accent underline underline-offset-2">
                    Kembali
                </Link>
            </div>
        </div>
    )
}

export default Page