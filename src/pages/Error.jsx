import React, { useEffect } from 'react'

import { NavLink } from 'react-router-dom'

export default function Error() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100 min-vw-100' >
            <div className='text-center'>
                <h1 className=''>Opps Page Not Found</h1>
                <button className='btn btn-lg btn-primary my-4'>
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'white'}}>Go To Homepage</NavLink>
                </button>
            </div>
        </div>
    )
}
