import React from 'react'

export default function SimmilorProduct() {
    return (
        <>
            <div className="d-flex mb-3">
                <NavLink href="#" className="me-3">
                    <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/8.webp" style={{ minWidth: '96px', height: '96px' }} className="img-md img-thumbnail" />
                </NavLink >
                <div className="info">
                    <NavLink href="#" className="nav-link mb-1">
                        Rucksack Backpack Large <br />
                        Line Mounts
                    </NavLink >
                    <strong className="text-dark"> $38.90</strong>
                </div>
            </div>
        </>
    )
}
