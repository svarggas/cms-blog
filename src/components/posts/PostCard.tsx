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
        <li className="flex items-center justify-center px-4">
            <Link href={`/posts/${slug}`} aria-label={title}>
                <div className="container px-5 mx-auto">
                    <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10">
                            <ContentfulImage
                                alt={`Cover Image for ${title}`}
                                src={coverImage.fields.file.url}
                                width={coverImage.fields.file.details.image.width}
                                height={coverImage.fields.file.details.image.height}
                                style={{
                                    width: 'inherit',
                                    height: 'inherit',
                                }}
                            />
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h1 className="text-black text-2xl title-font font-bold mb-2">
                                {title}
                            </h1>
                            <p className="leading-relaxed text-base">
                                {excerpt}
                            </p>
                            <div className="py-4">
                                {/* Tags loop */}
                                <div className=" inline-block mr-2" >
                                    <div className="flex  pr-2 h-full items-center">
                                        <svg className="text-yellow-500 w-6 h-6 mr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx="12" cy="12" r="9" />
                                            <path d="M9 12l2 2l4 -4" />
                                        </svg>
                                        <p className="title-font font-medium">Python</p>
                                    </div>
                                </div>

                            </div>
                            <div className="md:flex font-bold text-gray-800">
                                <div className="w-full grid grid-cols-2">
                                    <h2 className="text-gray-500 mr-5">
                                        By {author.fields.name}
                                    </h2>
                                    <p>
                                        Published: <DateComponent dateString={date} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default PostCard