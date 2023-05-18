import Image from 'next/image'
import { FC } from 'react'

interface ContentfulLoaderProps {
    src: string
    width?: number
    quality?: number
}

const contentfulLoader = ({ src, width, quality }: ContentfulLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

interface ContentfulImageProps extends ContentfulLoaderProps {
    alt: string
    [x: string]: any;
}

const ContentfulImage: FC<ContentfulImageProps> = (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image loader={contentfulLoader} {...props} />
}

export default ContentfulImage