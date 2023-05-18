import { FC } from 'react'

import Avatar from '@/components/shared/Avatar'
import ContentfulImage from '@/components/shared/ContentfulImage'
import DateComponent from '@/components/shared/DateComponent'

import { post } from '@/lib/interfaces/posts'

interface PostHeaderPost {
    post: post
}

const PostHeader: FC<PostHeaderPost> = ({ post }) => {
    const { title, coverImage, author, date } = post.fields

    return (
        <>
            <h1>{title}</h1>
            <div className='hidden md:flex md:justify-between md:items-center md:mb-10'>
                <Avatar name={author.fields.name} picture={author.fields.picture} />
                <DateComponent dateString={date} className='text-sm text-gray-400' />
            </div>
            <div className='mb-8 md:mb-16 sm:mx-0'>
                <ContentfulImage
                    alt={`Cover Image for ${title}`}
                    src={coverImage.fields.file.url}
                    width={coverImage.fields.file.details.image.width}
                    height={coverImage.fields.file.details.image.height}
                />
            </div>
            <div className='flex justify-between items-center md:hidden mb-6'>
                <Avatar name={author.fields.name} picture={author.fields.picture} />
                <DateComponent dateString={date} className='text-sm text-gray-400' />
            </div>
        </>
    )
}

export default PostHeader