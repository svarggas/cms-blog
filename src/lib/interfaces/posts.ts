import { Document } from '@contentful/rich-text-types'
import { picture } from './picture'
import { coverImage } from './converImage'

export interface author {
    fields: {
        name: string
        picture: picture
    }
}

export interface post {
    fields: {
        slug: string
        title: string
        excerpt: string
        date: string
        content: Document
        author: author
        coverImage: coverImage
    }
}