import { authUserSession } from "@/libs/auth-libs"
import { redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    const user = await authUserSession()
    // console.log(user)
    return (
        <div className="mt-8 text-color-primary flex justify-center items-center flex-col">
            {/* <h3>DASHBOARD</h3> */}
            <h5 className="text-2xl font-bold">Welcome , {user?.name}</h5>
            <div className="p-4 flex justify-center">
                <Image
                    src={user?.image}
                    alt="."
                    width={250}
                    height={250}
                    className=""
                />

            </div>
            <div className="p-4 flex justify-center gap-2">
                <div className="container">
                    <label for="name" class="block text-sm font-medium leading-6">Name</label>
                    <input
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-color-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color-accent sm:text-sm sm:leading-6"
                        name="name"
                        value={user?.name}
                        readonly
                    />
                </div>
                <div className="container">
                    <label for="name" class="block text-sm font-medium leading-6">Email</label>
                    <input
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-color-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color-accent sm:text-sm sm:leading-6"
                        name="name"
                        value={user?.email}
                        readonly
                    />
                </div>
            </div>
            <div className="py-8 flex flex-wrap gap-4">
                <Link
                    className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl rounded"
                    href="/users/dashboard/collection">
                    My Collection
                </Link>
                <Link
                    className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl rounded"
                    href="/users/dashboard/comment">
                    My Comment
                </Link>
            </div>
        </div>
    )
}

export default Page