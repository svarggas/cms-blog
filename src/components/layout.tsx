import React from 'react'
import Header from '@/components/shared/Header';

const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            <main className='p-8 bg-white md:container md:mx-auto md:px-40 p-4 rounded-lg py-8 mt-12 mb-10'>
                {children}
            </main>
        </>
    )
}

export default Layout