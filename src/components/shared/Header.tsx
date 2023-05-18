import Link from 'next/link'
import React, { FC } from 'react'

import logo from "@/images/logo.png"
import ContentfulImage from './ContentfulImage'

interface LinkComponentProps {
    text: string
    href: string
}

const LinkComponent: FC<LinkComponentProps> = ({ text, href }) => {
    return (
        <Link
            href={href}
            className="mr-10 font-medium hover:text-gray-900"
        >
            {text}
        </Link>
    )
}

const Header: FC = () => {

    const links: LinkComponentProps[] = [
        { text: 'Home', href: '/' },
        { text: 'Posts', href: '/posts' },
        { text: 'FAQ', href: '/faq' }
    ]

    return (
        <header className="w-full text-gray-700 bg-white shadow-xl body-font ">
            <div className="container flex flex-col items-start p-3 mx-auto md:flex-row">
                <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                    <ContentfulImage
                        alt="Blog"
                        src={logo.src}
                        width={50}
                        height={10}
                    />
                </a>
                <nav className="flex items-center justify-center text-base md:ml-auto md:mt-10">
                    {
                        links.map((link, index) => (
                            <LinkComponent key={index} text={link.text} href={link.href} />
                        ))
                    }
                </nav>
            </div>
        </header>
    )
}

export default Header