import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import CartContex from '../contex/CartContex';
import plusImg from '/images/cross.svg'

export default function Shop() {
    const [allProductData, setAllProductData] = useState([])
    const { cart, setCart } = useContext(CartContex);

    useEffect(() => {
        loadData()
        window.scrollTo(0, 0);
    }, [])

    const loadData = () => {
        fetch('https://shubhamnegi2.github.io/textAPi/api/ProductDetails.json')
            .then(res => res.json())
            .then(data => setAllProductData(data))
            .catch(error => console.error('Error fetching product data:', error))
    }
    const SetCartItm = (id) => {
        if (!cart.ids.includes(id)) {
            setCart(prev => ({
                ...prev,
                ids: [...prev.ids, id],
                quantities: [...prev.quantities, { "id": id, "quantity": 1 }],
            }));
        } else {
            setCart(prev => (
                {
                    ...prev,
                    ids: (prev.ids).filter(item => item !== id),
                    quantities: prev.quantities.filter(item => item.id !== id),
                }
            ))
        }
    }

    return (
        <>
            <h1 className="text-center my-5"><span style={{ borderBottom: '3px solid #3b5d50' }}>Shop</span></h1>
            <div className="untree_co-section product-section pt-0" style={{ paddingBottom: '150px' }}>
                <div className="container">
                    <div className="row">
                        {allProductData.map((data, i) => (
                            <div key={i + 321} className="col-12 col-md-4 col-lg-3 mt-5 mb-md-0 position-relative">
                                <NavLink className="product-item pb-5" to={`/productDetails/${data.id}`}>
                                    <img src={data.image} className="img-fluid product-thumbnail" style={{ height: '250px', objectFit: 'cover', width: '100%' }} />
                                    <h3 className="product-title">{data.title.length > 50 ? data.title.slice(0, 50) + '...' : data.title}</h3>
                                    <strong className="product-price">$ {data.price}</strong>

                                </NavLink>
                                <span className="icon-cross d-flex justify-content-center align-items-center" onClick={() => SetCartItm(data.id)}>
                                    {cart.ids.includes(data.id) ? <i className="fa fa-minus text-white" aria-hidden="true"></i> : <img src={plusImg} className="img-fluid" />}
                                </span>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
