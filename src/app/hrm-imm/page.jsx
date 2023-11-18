"use client"

import React, { useEffect, useState } from 'react'
import Users from '../../components/Users'
import { getUserResponse } from '@/libs/api-libs';

const Page = () => {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        const allUsers = await getUserResponse('users');
        setUsers(allUsers);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="text-color-primary container mx-auto">
            <h1 className="text-xl text-center mt-4 mb-4">
                HRM IMM Client Side
            </h1>
            <Users
                api={users}
            />
        </div>
    )
}

export default Page