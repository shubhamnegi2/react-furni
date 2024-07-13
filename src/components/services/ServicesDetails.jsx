import React from 'react'

export default function ServicesDetails({data}) {
    return (
        <>
            <div className="why-choose-section">
                <div className="container">


                    <div className="row my-5">
                        {data.map((item, i) => (
                            <div key={i + 131 + 'tdf'} className="col-6 col-md-6 col-lg-3 mb-4">
                                <div className="feature">
                                    <div className="icon">
                                        <img src={item.icon} alt="Image" className="imf-fluid" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}


                    </div>

                </div>
            </div>
        </>
    )
}
