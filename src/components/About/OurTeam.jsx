import React from 'react'
export default function OurTeam({ data }) {
    return (
        <>
            <div className="untree_co-section pt-0">
                <div className="container">

                    <div className="row mb-5">
                        <div className="col-lg-5 mx-auto text-center">
                            <h2 className="section-title">Our Team</h2>
                        </div>
                    </div>

                    <div className="row">
                        {data.map((item,i) => (
                            <div key={i+'fddr'} className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                                <img src={item.imgSrc} className="img-fluid mb-2" />
                                <h3 clas="" style={{fontSize:'20px'}}>{item.name}</h3>
                                <span className="d-block position mb-2" >{item.position}</span>
                                <p style={{lineHeight:'20px'}}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
