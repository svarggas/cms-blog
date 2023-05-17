import { FC } from 'react'
import ContentfulImage from './ContentfulImage'

import { picture } from '@/lib/interfaces/posts'

interface AvatarProps {
    name: string,
    picture: picture
}

const Avatar: FC<AvatarProps> = ({ name, picture }) => {
    return (
        <div className='flex items-center'>
            <div className='relative w-10 h-10 mr-4'>
                <ContentfulImage
                    src={picture.fields.file.url}
                    className='rounded-full m-0'
                    alt={name}
                    width={150}
                    height={150}
                />
            </div>
            <div className='font-semibold'>{name}</div>
        </div>
    )
}

export default Avatar