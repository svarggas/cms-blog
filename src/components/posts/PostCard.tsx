import { FC } from 'react'
import Link from 'next/link'

import Avatar from '@/components/shared/Avatar'
import DateComponent from '@/components/shared/DateComponent'
import ContentfulImage from '@/components/shared/ContentfulImage'

import { post } from '@/lib/interfaces/posts'

interface PostCardProps {
    post: post
}

const PostCard: FC<PostCardProps> = ({ post }) => {
    const { title, slug, excerpt, coverImage, author, date } = post.fields

    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <ContentfulImage
                    className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    alt={`Cover Image for ${title}`}
                    src={coverImage.fields.file.url}
                    width={coverImage.fields.file.details.image.width}
                    height={coverImage.fields.file.details.image.height}
                />
                <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                        {title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                        {excerpt}
                    </p>
                    <div className="flex items-center flex-wrap ">
                        <Link href={`/posts/${slug}`}>
                            <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md shadow-cla-blue px-4 py-1 rounded-lg">
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard