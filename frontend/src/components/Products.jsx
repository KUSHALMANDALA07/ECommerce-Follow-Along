import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card';
import styles from "./products.module.css";
const Products = () => {
    const [products,setProducts] = useState([]);
    function getData(){
        axios.get("https://localhost:8080/allproducts")
        .then((data)=>{
            console.log(data);
            setProducts(data.data.products);
        }).catch((err)=>{
            console.log(console.error(err));
        })
    }


    useEffect(()=>{
        getData();
    },[])

  return (
    <>
        <h1>Products</h1>
        <div className={styles.products}>
        {
            products.map((ele)=>{
                return <Card key={ele.id} product={ele}/>
            })
        }
    </div>
    </>
  )
}

export default Products