import { FC } from "react";
import { contentfulClient } from "@/lib/Contentful";

interface FaqProps {
    faqs: {
        fields: {
            title: string
            description: string
        }
    }[]
}

const Faqs: FC<FaqProps> = ({ faqs }) => {
    return (
        <div className="mt-10">
            <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h4>
            <p className="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">

                {
                    faqs.map((item, index) => (
                        <div className="flex space-x-8 mt-8" key={index}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-700">
                                    {item.fields.title}
                                </h4>
                                <p className="text-gray-600 my-2">
                                    {item.fields.description}
                                </p>
                                <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline capitalize" title="Read More">Read More</a>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const response = await contentfulClient.getEntries({ content_type: 'faq' })

    return {
        props: {
            faqs: response.items || [],
        },
        revalidate: 60
    }
}

export default Faqs