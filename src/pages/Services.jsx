import React, { useEffect } from 'react';
import ServicesDetails from '../components/services/ServicesDetails';
import Product from '../components/home/Product';
import Testimonials from '../components/home/Testimonials';
import Banner from '../components/home/Banner';

import couchImage from '/images/couch.png';
import truckIcon from '/images/truck.svg';
import bagIcon from '/images/bag.svg';
import supportIcon from '/images/support.svg';
import returnIcon from '/images/return.svg';

export default function Services() {
  const bannerData = {
    heading: 'Services',
    subHeading: ' ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus!. Aliquam vulputate velit imperdiet dolor tempor tristique.',
    buttons: [
      { text: 'Shop Now', path: '/shop', className: 'btn btn-secondary me-2' },
      { text: 'Explore', path: '/shop', className: 'btn btn-white-outline' }
    ],
    image: couchImage
  };

  const OurServices = [
    {
      icon: truckIcon,
      title: "Fast & Free Shipping",
      description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
      icon: bagIcon,
      title: "Easy to Shop",
      description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
      icon: supportIcon,
      title: "24/7 Support",
      description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
      icon: returnIcon,
      title: "Hassle Free Returns",
      description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
      icon: truckIcon,
      title: "Fast & Free Shipping",
      description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
      icon: bagIcon,
      title: "Easy to Shop",
      description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
      icon: supportIcon,
      title: "24/7 Support",
      description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
      icon: returnIcon,
      title: "Hassle Free Returns",
      description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner data={bannerData} />
      <ServicesDetails data={OurServices} />
      <Product />
      <Testimonials />
    </>
  );
}
