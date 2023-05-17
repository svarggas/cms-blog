import { FC } from 'react'

import { contentfulClient } from '@/lib/Contentful'
import PostCard from '@/components/posts/PostCard'

import type { post } from '@/lib/interfaces/posts'

interface PostProps {
    posts: post[]
}

const Posts: FC<PostProps> = ({ posts }) => {
    return (
        <section className='section'>
            <div className='container'>
                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
                    {posts.map(post => (
                        <PostCard key={post.fields.slug} post={post} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export const getStaticProps = async () => {
    const response = await contentfulClient.getEntries({ content_type: 'post' })

    return {
        props: {
            posts: response.items || [],
            revalidate: 60
        }
    }
}

export default Posts