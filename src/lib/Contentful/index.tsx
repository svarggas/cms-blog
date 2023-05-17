const contentful = require('contentful');

export const contentfulClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const previewContentfulClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: 'preview.contentful.com',
});