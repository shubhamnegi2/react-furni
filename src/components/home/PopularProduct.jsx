import React, { useEffect, useState } from 'react'
import product1 from '../../assets/images/product-1.png'
import product2 from '../../assets/images/product-2.png'
import product3 from '../../assets/images/product-3.png'
import { NavLink } from 'react-router-dom'
export default function PopularProduct() {
    const [data, setData] = useState([])
    useEffect(() => {
        loadData()
    }, [])
    const loadData = () => {
        fetch('/src/api/ProductDetails.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching product data:', error))
    }
    return (
        <>
            <div className="popular-product">
                <div className="container">
                    <div className="row">
                        {data.slice(0, 3).map((item, i) => (
                            <div key={i + 53} className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="product-item-sm d-flex">
                                    <div className="thumbnail">
                                        <img src={item.image} alt="Image" className="img-fluid" />
                                    </div>
                                    <div className="pt-3">
                                        <h3> {item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title} </h3>
                                        <p>{item.description.length > 20 ? `${item.description.slice(0, 50)}...` : item.description}</p>
                                        <p><NavLink className="text-danger" style={{ fontWeight: "bold" }} to={`productDetails/${item.id}`}>Read More</NavLink></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
