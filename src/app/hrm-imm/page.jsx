"use client"

import { getAllUser } from "@/libs/api-libs"
import { useState } from 'react'

const Page = async () => {
    const userList = await getAllUser("/users");

    return (
        <div className="text-color-primary flex justify-center items-center">
            <h1 className="text-xl">
                HRM IMM
            </h1>
        </div>
    )
}

export default Page