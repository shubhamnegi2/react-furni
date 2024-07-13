import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
export default function ProductDetailBottomSec({ categoryData }) {

    if (!categoryData) {
        return null;
    }
    const ID = useParams()
    const [current, setCurrent] = useState(0)
    const [keys, setKeys] = useState('')
    const [desc, setDesc] = useState([])
    const [currDesc, setCurrDesc] = useState([])
    const truncateTitle = (title, wordLimit = 6) => {
        const words = title.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return title;
    };

    useEffect(() => {
        fetch('/src/api/ProductDescription.json')
            .then(res => res.json())
            .then(dt => setDesc(dt))
            window.scrollTo(0, 0);
    }, [])
    useEffect(() => {
        for (let dt of currDesc) {
            for (let i = 0; i < Object.keys(dt.data).length; i++) {
                const key = Object.keys(dt.data)[i];
                if (i === 0) {
                    setKeys(key);
                    return;
                }
            }
        }
    }, [currDesc]);

    useEffect(() => {
        const description = desc.filter((item) => (item.id == ID.productId))
        setCurrDesc(description)
    }, [desc])

    const showContent = (key) => {
        setKeys(key)
    }
    return (
        <>


            <section className="bg-light border-top py-5">
                <div className="container">
                    <div className="row gx-4">
                        <div className="col-lg-8 mb-4">
                            <div className="border rounded-2 px-3 py-2 bg-white">
                                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                    {currDesc.map((item) => (
                                        (Object.keys(item.data)).map((keys) => (
                                            <li className="nav-item d-flex mx-2" key={keys} role="presentation" onClick={() => showContent(keys)}>
                                                <NavLink className="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">{item.data[keys].name}</NavLink >
                                            </li>
                                        ))
                                    ))}
                                </ul>


                                <div className="tab-content" id="ex1-content">
                                    {
                                        currDesc.map((dt) => (
                                            Object.keys(dt.data).map((key, i) => (
                                                <div key={`${key}123`} className={`tab-pane ${keys == key ? "show active" : "fade"}`} >
                                                    <p>{dt.data[key].paragraph}</p>

                                                    <div className="row mb-2">
                                                        <div className="col-12 col-md-6">
                                                            <ul className="list-unstyled mb-0">
                                                                {dt.data[key].list.length != 0 ? dt.data[key].list.map((item, idx) => (
                                                                    idx < Math.floor(dt.data[key].list.length / 2) && (
                                                                        <li key={idx + 11}><i className="fa fa-check text-success me-2"></i>{item}</li>
                                                                    )
                                                                )) : ''}
                                                            </ul>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <ul className="list-unstyled mb-0">
                                                                {dt.data[key].list.length != 0 ? dt.data[key].list.map((item, idx) => (
                                                                    idx > Math.ceil(dt.data[key].list.length / 2) && (
                                                                        <li key={idx + 11}><i className="fa fa-check text-success me-2"></i>{item}</li>
                                                                    )
                                                                )) : ''}
                                                            </ul>
                                                        </div>
                                                    </div>


                                                    <table className="table border mt-3 mb-2">
                                                        <tbody>
                                                            {dt.data[key].properties != {} ? Object.keys(dt.data[key].properties).map((prop, i) => (
                                                                <tr key={i + 67}>
                                                                    <th className="p-2">{prop}:</th>
                                                                    <td className="p-2">{dt.data[key].properties[prop]}</td>
                                                                </tr>
                                                            )) : ''

                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            ))

                                        )
                                        )

                                    }

                                </div>
                                {/* <!-- Pills content --> */}
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5 mb-sm-0">
                            <div className="px-0 border rounded-2 shadow-0">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Similar items</h5>
                                        {categoryData.slice(0, 3).map((ctg) => (
                                            <div className="d-flex mb-3" key={ctg.id}>
                                                <NavLink to={`/productDetails/${ctg.id}`} className="me-3">
                                                    <img src={ctg.image} style={{ minWidth: '96px', height: '96px' }} className="img-md img-thumbnail" />
                                                </NavLink >
                                                <div className="info">
                                                    <NavLink to={`/productDetails/${ctg.id}`} className="nav-link mb-1">
                                                        <strong>{truncateTitle(ctg.title, 4)}  </strong><br />
                                                        {ctg.category}
                                                    </NavLink >
                                                    <strong className="text-dark"> ${ctg.price}</strong>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
