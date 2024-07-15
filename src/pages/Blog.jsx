import React, { useEffect } from 'react'

import BlogCards from '../components/Blog/BlogCards';
import Banner from '../components/home/Banner';
import couch from '/images/couch.png';
import post1 from "/images/post-1.jpg";
import post2 from "/images/post-2.jpg";
import post3 from "/images/post-3.jpg";
import post4 from "/images/post-1.jpg";
import post5 from "/images/post-2.jpg";
import post6 from "/images/post-3.jpg";
import post7 from "/images/post-1.jpg";
import post8 from "/images/post-2.jpg";
import post9 from "/images/post-3.jpg";
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
        image: couch
    };
    const blogData = [
        {
            image: post1,
            title: "First Time Home Owner Ideas",
            author: "Kristin Watson",
            date: "Dec 19, 2021"
        },
        {
            image: post2,
            title: "How To Keep Your Furniture Clean",
            author: "Robert Fox",
            date: "Dec 15, 2021"
        },
        {
            image: post3,
            title: "Small Space Furniture Apartment Ideas",
            author: "Kristin Watson",
            date: "Dec 12, 2021"
        },
        {
            image: post4,
            title: "First Time Home Owner Ideas",
            author: "Kristin Watson",
            date: "Dec 19, 2021"
        },
        {
            image: post5,
            title: "How To Keep Your Furniture Clean",
            author: "Robert Fox",
            date: "Dec 15, 2021"
        },
        {
            image: post6,
            title: "Small Space Furniture Apartment Ideas",
            author: "Kristin Watson",
            date: "Dec 12, 2021"
        },
        {
            image: post7,
            title: "First Time Home Owner Ideas",
            author: "Kristin Watson",
            date: "Dec 19, 2021"
        },
        {
            image: post8,
            title: "How To Keep Your Furniture Clean",
            author: "Robert Fox",
            date: "Dec 15, 2021"
        },
        {
            image: post9,
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
