import { FC } from 'react'
import RichText from '@/components/shared/RichText'

import { post } from '@/lib/interfaces/posts'

interface PostBodyProps {
    post: post
}

const PostBody: FC<PostBodyProps> = ({ post }) => {
    const { content } = post.fields

    return (
        <div className='mx-auto prose'>
            <RichText content={content} />
        </div>
    )
}

export default PostBody