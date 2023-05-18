import { Html, Main, Head, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head title='Blog'>
                {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                <title key="title">Blog</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}