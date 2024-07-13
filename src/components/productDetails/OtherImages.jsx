import React from 'react'

export default function OtherImages() {
    return (

        <span className=" item-thumb border mx-1 rounded-2 cursor-pointer" >
            <img onMouseEnter={(e) => showLargeImg(e)} onClick={(e) => showLargeImg(e)} width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" />
        </span >
    )
}
