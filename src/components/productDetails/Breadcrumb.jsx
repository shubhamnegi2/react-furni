import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Breadcrumb({name}) {
    // console.log('name=',name);
    
    return (
        <>
            <div className="bg-light">
                <div className="container py-4">
                    <nav className="d-flex">
                        <h6 className="mb-0">
                            <NavLink to="/" className="text-dark text-decoration-none">Home</NavLink>
                            <span className="text-dark mx-2"> &gt; </span>
                            <NavLink to="#" className="text-dark text-decoration-none">Product Details</NavLink>
                            <span className="text-dark mx-2"> &gt; </span>
                            <NavLink to="#" className="text-dark text-decoration-none">{name}</NavLink>
                        </h6>
                    </nav>
                </div>
            </div>
        </>
    )
}
