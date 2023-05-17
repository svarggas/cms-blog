import { Document } from '@contentful/rich-text-types'

export interface picture {
    fields: {
        file: {
            url: string
        }
    }
}

export interface author {
    fields: {
        name: string
        picture: picture
    }
}

export interface coverImage {
    fields: {
        file: {
            url: string
            details: {
                image: {
                    width: number
                    height: number
                }
            }
        }
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