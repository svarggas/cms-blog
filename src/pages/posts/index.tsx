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
                <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">Blog List</h4>
                <p className="text-center text-gray-600 text-sm mt-2">Here are some of the last blogs posted</p>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {posts.map(post => (
                                <PostCard key={post.fields.slug} post={post} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export const getStaticProps = async () => {
    const response = await contentfulClient.getEntries({ content_type: 'post' })

    return {
        props: {
            posts: response.items || [],
            revalidate: 1
        }
    }
}

export default Posts