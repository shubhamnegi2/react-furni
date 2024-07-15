import React, { useEffect } from 'react'

import ServicesDetails from '../components/services/ServicesDetails'
import Product from '../components/home/Product'
import Testimonials from '../components/home/Testimonials'
import Banner from '../components/home/Banner'
export default function Services() {
    const bannerData = {
        heading: 'Services',
        subHeading: ' ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus!. Aliquam vulputate velit imperdiet dolor tempor tristique.',
        buttons: [
            { text: 'Shop Now', path: '/shop', className: 'btn btn-secondary me-2' },
            { text: 'Explore', path: '/shop', className: 'btn btn-white-outline' }
        ],
        image: '/images/couch.png'
    };
    const OurServices = [
        {
            icon: "/images//truck.svg",
            title: "Fast & Free Shipping",
            description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
        },
        {
            icon: "/images//bag.svg",
            title: "Easy to Shop",
            description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
        },
        {
            icon: "/images//support.svg",
            title: "24/7 Support",
            description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
        },
        {
            icon: "/images//return.svg",
            title: "Hassle Free Returns",
            description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
        },
        {
            icon: "/images//truck.svg",
            title: "Fast & Free Shipping",
            description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
        },
        {
            icon: "/images//bag.svg",
            title: "Easy to Shop",
            description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
        },
        {
            icon: "/images//support.svg",
            title: "24/7 Support",
            description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
        },
        {
            icon: "/images//return.svg",
            title: "Hassle Free Returns",
            description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
        }
    ];
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <>
            <Banner data={bannerData} />
            <ServicesDetails data={OurServices} />
            <Product />
            <Testimonials />
        </>
    )
}
