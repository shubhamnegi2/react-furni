import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Banner({ data }) {
    
    return (
        <>
            <div  className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>{data.heading} <span className='d-block'>{data.subHeading}</span></h1>
                                <p className="mb-4">{data.description}</p>
                                <p>
                                    {(data.buttons).map((item ,index)=> (
                                        <NavLink to={item.path} key={item.id || index} className={item.className}>{item.text}</NavLink>
                                    ))}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src={data.image} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
