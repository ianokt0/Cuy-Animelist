"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const CommentInput = ({ anime_mal_id, user_email, username, anime_title, user_image }) => {
    const [comment, setComment] = useState("");
    const [isCreated, setIsCreated] = useState(false);


    const router = useRouter();

    const handleInput = (event) => {
        setComment(event.target.value);
    }

    const handlePosting = async (event) => {
        event.preventDefault()
        const data = { anime_mal_id, user_email, comment, username, anime_title, user_image }
        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const postComment = await response.json()
        if (postComment.status == 200) {
            setIsCreated(true)
            setComment("")
            router.refresh()
        }
        return
    }
    return (
        <div className='container'>
            {isCreated && <p className='text-color-primary'>komentar terkirim...</p>}
            <textarea
                className='h-32 w-full text-xl p-4 rounded-lg'
                onChange={handleInput}
                value={comment}
                placeholder={`Tambah komentar untuk ${anime_title}`}
            />
            <button className='w-52 py-2 px-3 bg-color-accent rounded-lg' onClick={handlePosting}>Posting</button>
        </div>
    )
}

export default CommentInput