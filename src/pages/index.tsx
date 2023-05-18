import { FC } from "react";

import ContentfulImage from "@/components/shared/ContentfulImage";
import { contentfulClient } from '@/lib/Contentful'
import { landing } from '@/lib/interfaces/landing'


interface HomeProps {
    landing: landing
}

const Home: FC<HomeProps> = ({ landing }) => {
    const { title, image } = landing.fields;

    return (
        <div className="flex align-items-center h-full w-full text-black pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl">
            <div className="flex flex-col items-center sm:px-5 md:flex-row">
                <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
                    <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5">
                        <p className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                            {title}
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="block">
                        <ContentfulImage
                            className="w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                            alt={`Cover Image for ${title}`}
                            src={image.fields.file.url}
                            width={image.fields.file.details.image.width}
                            height={image.fields.file.details.image.height}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const response = await contentfulClient.getEntries({ content_type: 'landing' })
    return {
        props: {
            landing: response.items?.[0] || {},
        },
        revalidate: 60
    }
}

export default Home