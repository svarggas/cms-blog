import { FC } from 'react'

import PostBody from '@/components/posts/PostBody'
import PostHeader from '@/components/posts/PostHeader'
import AlertPreview from '@/components/shared/AlertPreview'
import Skeleton from '@/components/shared/Skeleton'
import { contentfulClient, previewContentfulClient } from '@/lib/Contentful'
import { post } from '@/lib/interfaces/posts'
import { useRouter } from 'next/router'

interface PostProps {
    post: post
    preview: boolean
}

const Post: FC<PostProps> = ({ post, preview }) => {
    const router = useRouter()

    return (
        <section className='section'>
            {preview && <AlertPreview />}
            <div className='container'>
                <article className='prose mx-auto'>
                    {router.isFallback ? (
                        <Skeleton />
                    ) : (
                        <>
                            <PostHeader post={post} />
                            <PostBody post={post} />
                        </>
                    )}
                </article>
            </div>
        </section>
    )
}

export const getStaticProps = async (
    { params, preview = false }:
        { params: { slug: string }, preview: boolean }
) => {
    const cfClient = preview ? previewContentfulClient : contentfulClient

    const { slug } = params
    const response = await cfClient.getEntries({
        content_type: 'post',
        'fields.slug': slug
    })

    if (!response?.items?.length) {
        return {
            redirect: {
                destination: '/posts',
                permanent: false
            }
        }
    }

    return {
        props: {
            post: response?.items?.[0],
            preview,
            revalidate: 1
        }
    }
}

export const getStaticPaths = async () => {
    const response = await contentfulClient.getEntries({ content_type: 'post' })
    const paths = response.items.map((item: post) => ({
        params: { slug: item.fields.slug }
    }))

    return {
        paths,
        fallback: false
    }
}

export default Post