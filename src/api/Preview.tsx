import { NextApiRequest, NextApiResponse } from 'next';
import { previewContentfulClient } from '@/lib/Contentful'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { secret, slug } = req.query

    if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    const response = await previewContentfulClient.getEntries({
        content_type: 'post',
        'fields.slug': slug
    })

    const post = response?.items?.[0]

    if (!post) {
        return res.status(401).json({ message: 'Invalid slug' })
    }

    res.setPreviewData({})
    const url = `/posts/${post.fields.slug}`
    res.writeHead(307, { Location: url })
    res.end()
}

export default handler