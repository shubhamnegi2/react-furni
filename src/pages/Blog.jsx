import React, { useEffect } from 'react'

import BlogCards from '../components/Blog/BlogCards';
import Banner from '../components/home/Banner';
export default function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    const bannerData = {
        heading: 'Blog',
        subHeading: ' ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus!. Aliquam vulputate velit imperdiet dolor tempor tristique.',
        buttons: [
            { text: 'Shop Now', path: '/shop', className: 'btn btn-secondary me-2' },
            { text: 'Explore', path: '/shop', className: 'btn btn-white-outline' }
        ],
        image: 'src/assets/images/couch.png'
    };
    const blogData = [
        {
            image: "src/assets/images/post-1.jpg",
            title: "First Time Home Owner Ideas",
            author: "Kristin Watson",
            date: "Dec 19, 2021"
        },
        {
            image: "src/assets/images/post-2.jpg",
            title: "How To Keep Your Furniture Clean",
            author: "Robert Fox",
            date: "Dec 15, 2021"
        },
        {
            image: "src/assets/images/post-3.jpg",
            title: "Small Space Furniture Apartment Ideas",
            author: "Kristin Watson",
            date: "Dec 12, 2021"
        },
        {
            image: "src/assets/images/post-1.jpg",
            title: "First Time Home Owner Ideas",
            author: "Kristin Watson",
            date: "Dec 19, 2021"
        },
        {
            image: "src/assets/images/post-2.jpg",
            title: "How To Keep Your Furniture Clean",
            author: "Robert Fox",
            date: "Dec 15, 2021"
        },
        {
            image: "src/assets/images/post-3.jpg",
            title: "Small Space Furniture Apartment Ideas",
            author: "Kristin Watson",
            date: "Dec 12, 2021"
        },
        {
            image: "src/assets/images/post-1.jpg",
            title: "First Time Home Owner Ideas",
            author: "Kristin Watson",
            date: "Dec 19, 2021"
        },
        {
            image: "src/assets/images/post-2.jpg",
            title: "How To Keep Your Furniture Clean",
            author: "Robert Fox",
            date: "Dec 15, 2021"
        },
        {
            image: "src/assets/images/post-3.jpg",
            title: "Small Space Furniture Apartment Ideas",
            author: "Kristin Watson",
            date: "Dec 12, 2021"
        }
    ];

    return (
        <>
            <Banner data={bannerData} />

            <div className="blog-section">
                <div className="container">
                    <div className="row">
                        <BlogCards data={blogData} />
                    </div>
                </div>
            </div>
        </>
    )
}
