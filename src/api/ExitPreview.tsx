import { NextApiResponse } from 'next';

const handler = async (_: unknown, res: NextApiResponse) => {
    res.clearPreviewData()
    res.writeHead(307, { Location: '/' })
    res.end()
}

export default handler