import React from 'react'

export default function BlogCards({ data }) {
    return (
        <>
            {data.map((item, i) => (
                <div key={i + 874 + '43'}  className="col-12 col-sm-6 col-md-4 mb-5">
                    <div className="post-entry">
                        <span className="post-thumbnail">
                            <img src={item.image} alt="Image" className="img-fluid" />
                        </span>
                        <div className="post-content-entry">
                            <h3><a href="#">{item.title}</a></h3>
                            <div className="meta">
                                <span>by <strong>{item.author} </strong></span>
                                <span>on <strong >{item.date} </strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}
