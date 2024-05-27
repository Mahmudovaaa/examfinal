import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Sectionone from '../../components/sectionone/Sectionone'
import axios from 'axios'
import ProductCard from '../../components/cards/ProductCard'
import Sectiontwo from '../../components/sectiontwo/Sectiontwo'
import Sectiontree from '../../components/sectiontree/Sectiontree'
import Footer from '../../components/footer/Footer'
import Sectionfour from '../../components/sectionfour/Sectionfour'

const Home = () => {
    const [data, setData] =useState([])
    const getData =() => {
        axios.get('https://dummyjson.com/products')
        .then((res)=> {
            setData(res.data.products)
        })
    }
    useEffect(() => {
        getData()
    },[])
    
const basket = (product) => {
    axios.post('https://6653b8561c6af63f46756780.mockapi.io/basket',product)
}

const wishlist = async (product) => {
    await axios.get('https://6653b8561c6af63f46756780.mockapi.io/wishlist',product)
    .then(res => {
       const db = res.data
       const pro = db.find(item =>item.id === product.id )
       if(pro) {
           alert('artiq data var')
       } else (
           axios.post('https://6653b8561c6af63f46756780.mockapi.io/wishlist')
       )
    })
}

  return (
 <div style={{display:'flex', flexDirection:'column',width:'100%'}}>
    <Header/>
    <Sectionone/>
    <div style={{display:'flex', flexDirection:'column',width:'100%',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>
        <h1>Our Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap',gap:'20px',margin:'20px'}}>
            {data && data.map(item => <ProductCard item={item} basket ={() => basket(item.product)} wishlist={() => wishlist(item.product)}/>)}
        </div>
    </div>
    <Sectiontwo/>
    <Sectiontree/>
    <Sectionfour/>
    <Footer/>
 </div>
  )
}

export default Home