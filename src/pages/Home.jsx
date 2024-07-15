import React, { useEffect } from 'react'

import Banner from '../components/home/Banner'
import Product from '../components/home/Product'
import WhyChooseUs from '../components/home/WhyChooseUs'
import WeHelp from '../components/home/WeHelp'
import PopularProduct from '../components/home/PopularProduct'
import Testimonials from '../components/home/Testimonials'
import BlogSec from '../components/home/BlogSec'
export default function Home() {
    const bannerData = {
        heading: 'Modern Interior',
        subHeading: 'Design Studio',
        description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.',
        buttons: [
            { text: 'Shop Now', path: '/shop', className: 'btn btn-secondary me-2' },
            { text: 'Explore', path: '/shop', className: 'btn btn-white-outline' }
        ],
        image: '/images/couch.png'
    };
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <>
            <Banner data={bannerData} />
            <Product />
            <WhyChooseUs />
            <WeHelp />
            <PopularProduct />
            <Testimonials />
            <BlogSec />
        </>
    )
}
