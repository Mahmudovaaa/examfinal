import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import ProductCardBasket from '../../components/cards/ProductCardBasket'
import axios from 'axios'

const Wishlist = () => {
    const [data, setData] =useState([])
    const getData =() => {
        axios.get('https://6653b8561c6af63f46756780.mockapi.io/wishlist')
        .then((res)=> {
            setData(res.data)
        })
    }
    useEffect(() => {
        getData()
    },[])
    
const removeItem =(id) => {
    axios.delete(`https://6653b8561c6af63f46756780.mockapi.io/wishlist/${id}`)
    setTimeout(() => {
        getData()
    }, 500);
}
  return (
    <div>
    <Header/>
    <div>
        <h1>Our Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
        <div>
            {data && data.map(item => <ProductCardBasket item={item} sil ={() => removeItem(item.id)}/>)}
        </div>
    </div>
 </div>
  )
}

export default Wishlist