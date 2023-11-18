import Link from "next/link";

const Users = async ({ api }) => {
    return (
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mt-4">
            <h5 className="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center">Fetch Api From www.indonesiamitramedia.com/api/v1</h5>
            <hr />
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Office Id</th>
                                        <th scope="col" className="px-6 py-4">Nama</th>
                                        <th scope="col" className="px-6 py-4">Email</th>
                                    </tr>
                                </thead>
                                {api.data?.map((user, i) => {
                                    return (
                                        <tbody key={i}>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">{user.office_id}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{user.first_name + ' ' + user.last_name}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-end">
                                                    <Link href="#" className="bg-blue-600 hover:bg-blue-500 text-color-primary p-2 rounded-full mr-2 transition duration-150 ease-in-out">View</Link>
                                                    <Link href="#" className="bg-yellow-600 hover:bg-yellow-500 text-color-primary p-2 rounded-full mr-2 transition duration-150 ease-in-out">Edit</Link>
                                                    <Link href="#" className="bg-red-600 hover:bg-red-500 text-color-primary p-2 rounded-full transition duration-150 ease-in-out">Destroy</Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;