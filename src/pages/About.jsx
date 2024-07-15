import React, { useEffect } from 'react'
import Banner from '../components/home/Banner';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import OurTeam from '../components/About/OurTeam';
import homeImg from '/images/couch.png'
import imgSrc1 from "/images/person_1.jpg";
import imgSrc2 from "/images/person_2.jpg";
import imgSrc3 from "/images/person_3.jpg";
import imgSrc4 from "/images/person_4.jpg";
export default function About() {
  const bannerData = {
    heading: 'About Us',
    subHeading: ' ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus!. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    buttons: [
      { text: 'Shop Now', path: '/shop', className: 'btn btn-secondary me-2' },
      { text: 'Explore', path: '/shop', className: 'btn btn-white-outline' }
    ],
    image: homeImg
  };
  const TeamData = [
    {
      imgSrc: imgSrc1,
      name: "Lawson Arnold",
      position: "CEO, Founder, Atty.",
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      linkText: "Learn More",
      linkHref: "#"
    },
    {
      imgSrc: imgSrc2,
      name: "Jeremy Walker",
      position: "CEO, Founder, Atty.",
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      linkText: "Learn More",
      linkHref: "#"
    },
    {
      imgSrc: imgSrc3,
      name: "Patrik White",
      position: "CEO, Founder, Atty.",
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      linkText: "Learn More",
      linkHref: "#"
    },
    {
      imgSrc: imgSrc4,
      name: "Kathryn Ryan",
      position: "CEO, Founder, Atty.",
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      linkText: "Learn More",
      linkHref: "#"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <Banner data={bannerData} />
      <WhyChooseUs />
      <OurTeam data={TeamData} />
      <Testimonials />
    </>
  )
}
