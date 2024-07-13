import React, { useContext, useEffect, useState } from 'react'
import CartContex from '../contex/CartContex'
import { NavLink } from 'react-router-dom';

export default function Cart() {
    const { cart, setCart } = useContext(CartContex);
    const [quantity, setQuantity] = useState(1)
    const [productData, setProductDate] = useState([])
    const [hasData, setHasData] = useState(false)
    useEffect(() => {
        fetch('/src/api/Product.json')
            .then((res) => res.json())
            .then(data => setProductDate(data))
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        productData.map(item => (
            cart.ids.includes(item.id) ? setHasData(true) : ""
        ))
    }, [productData])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    const removeCartItem = (id) => {
        setCart(prev => (
            {
                ...prev,
                ids: prev.ids.filter(prevIds => prevIds !== id),
                quantities: prev.quantities.filter(item => item.id !== id)
            }
        ))
        console.log('cart removed', cart);
    }
    const increase = (id) => {
        quantity >= 999 ? setQuantity(999) : setQuantity(prev => (parseInt(prev) + 1))
        quantity < 999 ? setCart(prev => {
            return {
                ...prev,
                quantities: prev.quantities.map(item =>
                    item.id === id ? { "id": id, "quantity": item.quantity + 1 } : { ...item }
                )
            }
        }) : setQuantity(999)
        console.log('cart quantities', cart.quantities)
    }

    const decrease = (id) => {
        quantity <= 0 ? setQuantity(1) : setQuantity(prev => (parseInt(prev) - 1))
        quantity > 1 ? setCart(prev => {
            return {
                ...prev,
                quantities: prev.quantities.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : { ...item }
                )
            }
        }) : setQuantity(1)
    };

    const storeQuantity = (id, val) => {
        setCart(prev => {
            return {
                ...prev,
                quantities: prev.quantities.map(item =>
                    item.id === id ? { "id": id, "quantity" : parseInt(val) } : { ...item }
                )
            }
        })
    }
   
    
    

    return (
        <>
            <div className="untree_co-section before-footer-section">
                <div className="container">
                    <div className="row mb-5">
                        {hasData ?
                            <form className="col-md-12" method="post">
                                <div className="site-blocks-table" style={{ borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-total">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                productData.map(item => (
                                                    cart.ids.includes(item.id) ? (
                                                        <tr key={item.id+'ghnm'}>
                                                            <td className="product-thumbnail">
                                                             <NavLink to={`/productDetails/${item.id}`}>   <img src={item.image} alt="Image" width="100" className="img-fluid" /> </NavLink>
                                                            </td>
                                                            <td className="product-name">
                                                            <NavLink to={`/productDetails/${item.id}`}>   <p className=" text-black"> {item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}</p> </NavLink>
                                                            </td>
                                                            <td>${item.price}</td>

                                                            {cart.quantities.map(elem => (
                                                                elem.id === item.id ? <>
                                                                    <td>
                                                                        <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: '120px' }}>
                                                                            <div onClick={() => decrease(elem.id)} className="input-group-prepend">
                                                                                <button className="btn btn-outline-black decrease" type="button"> - </button>
                                                                            </div>
                                                                            <input type="text" value={elem.quantity} onChange={(e) => storeQuantity(elem.id, e.target.value)} className="form-control text-center quantity-amount" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                                            <div onClick={() => increase(elem.id)} className="input-group-append">
                                                                                <button className="btn btn-outline-black increase" type="button"> + </button>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>${(item.price * elem.quantity).toFixed(2)}</td>
                                                                </> : ''

                                                            ))}
                                                            <td><span onClick={() => removeCartItem(item.id)} className="btn btn-black btn-sm cursor-pointer">X</span></td>
                                                        </tr>

                                                    ) : ""
                                                ))


                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </form> : <h2 className='text-center bg-white p-5' style={{ fontWeight: 'bold', borderRadius: "5px" }}>Cart Is Empty</h2>}
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="row mb-5">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <button className="btn btn-black btn-sm btn-block">Update Cart</button>
                                </div>
                                <div className="col-md-6">
                                    <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label className="text-black h4" for="coupon">Coupon</label>
                                    <p>Enter your coupon code if you have one.</p>
                                </div>
                                <div className="col-md-8 mb-3 mb-md-0">
                                    <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-black">Apply Coupon</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pl-5">
                            <div className="row justify-content-end">
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-12 text-right border-bottom mb-5">
                                            <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <span className="text-black">Subtotal</span>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <strong className="text-black">$230.00</strong>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-md-6">
                                            <span className="text-black">Total</span>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <strong className="text-black">$230.00</strong>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-black btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
