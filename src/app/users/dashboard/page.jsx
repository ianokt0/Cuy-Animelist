import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"

const Page = async () => {
    const user = await authUserSession()
    // console.log(user)
    return (
        <div className="text-color-primary container-fluid">
            {/* <h3>DASHBOARD</h3> */}
            <h1 className="text-center mt-4">Welcome , {user.name}</h1>
            <div className="p-4 flex justify-center">
                <Image
                    src={user.image}
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
                        value={user.name}
                        readonly
                    />
                </div>
                <div className="container">
                    <label for="name" class="block text-sm font-medium leading-6">Email</label>
                    <input
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-color-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color-accent sm:text-sm sm:leading-6"
                        name="name"
                        value={user.email}
                        readonly
                    />
                </div>
            </div>
        </div>
    )
}

export default Page