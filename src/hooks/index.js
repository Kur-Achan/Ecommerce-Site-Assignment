import "./index.css";
import React from "react";
import { useGetProducts } from "./hooks/useGetProducts";
import UserCard from "../Atoms/UserCard";
const Products =()=>{
    const {products,error,loading} = useGetProducts();
    console.log({products});
    return(
        <div className="Images"> 
            {loading && <h2>loading users ...</h2>}
            {error.length>0 && <h2>{error}</h2>}
            {products.length>0 ? users.map((product)=>(
            <UserCard
            key ={product.id}
            image = {product.image}
           fullName= {`${product.name} ${product.price} `}
            />
            )):  !loading && <h2>No users found</h2>}
        </div>
    )
}
export default Products;