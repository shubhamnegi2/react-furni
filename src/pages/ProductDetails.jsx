import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/productDetails/Breadcrumb'
import Details from '../components/productDetails/Details'
import ProductDetailBottomSec from '../components/productDetails/ProductDetailBottomSec'

export default function ProductDetails() {
    const { productId } = useParams()

    const [allProductData, setAllProductData] = useState([])
    const [categoryData, setCategoryData] = useState([])
    const [productData, setProductData] = useState()
    const [productName, setProductName] = useState()
    const [productCategory, setProductCategory] = useState()
    const loadData = () => {
        fetch('https://shubhamnegi2.github.io/textAPi/api/ProductDetails.json')
            .then(res => res.json())
            .then(data => setAllProductData(data))
            .catch(error => console.error('Error fetching product data:', error))
    }


    useEffect(() => {
        window.scrollTo(0, 0);
        loadData();
    }, [])

    useEffect(() => {
        getMyProduct();
    }, [allProductData,productId])

    const getMyProduct = () => {
        const product = allProductData.filter((item) => (productId == item.id))
        setProductData(product)
    }

    const getProductNameAndCategory = useCallback((pName) => {
        pName.map((p) => {
            setProductName(p.title)
            setProductCategory(p.category)
        })
    }, [])

    useEffect(() => {
        setCategoryData(allProductData.filter((dt) => (dt.category == productCategory)))
    }, [productCategory])
    return (
        <>
            <Breadcrumb name={productName} />
            <Details productData={productData} pName={getProductNameAndCategory} />
            <ProductDetailBottomSec categoryData={categoryData} />
        </>
    )
}
