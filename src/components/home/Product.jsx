import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartContex from '../../contex/CartContex'
import plusImg from '../../assets/images/cross.svg'

export default function Product() {
    const [productData, setProductDate] = useState([])
    useEffect(() => {
        fetch('https://shubhamnegi2.github.io/textAPi/api/product.json')
            .then((res) => res.json())
            .then(data => setProductDate(data))
    }, [])

    const { cart, setCart } = useContext(CartContex);

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
                    quantities: [prev.quantities.filter(item=>item.id !== id )],
                }
            ))
        }
        console.log(cart);
    }


    return (
        <>
            <div className="product-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                            <p><NavLink to="/shop" className="btn">Explore</NavLink></p>
                        </div>


                        {productData.slice(0, 3).map((data, i) => (
                            <div key={i + 565} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 position-relative">
                                <NavLink className="product-item" to={`/productDetails/${data.id}`}>
                                    <img src={data.image} className="img-fluid product-thumbnail" />
                                    <h3 className="product-title">{data.title}</h3>
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
