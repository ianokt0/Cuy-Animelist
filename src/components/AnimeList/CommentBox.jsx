import prisma from '@/libs/prisma'
import React from 'react'
import Image from "next/image"

const CommentBox = async ({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({ where: { anime_mal_id } });
    return (
        <div className='grid mb-4 bg-color-primary rounded-lg container'>
            {comments.map(comment => {
                return (
                    <div key={comment.id} className='text-color-dark p-4'>
                        <div className="relative gap-2">
                            <Image
                                src={comment.user_image}
                                alt="."
                                width={50}
                                height={50}
                                className="rounded-full absolute"
                            />
                            <div className='ml-14'>
                                <p className='font-bold text-xl'>{comment.username}</p>
                                <p className=''>{comment.comment}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentBox