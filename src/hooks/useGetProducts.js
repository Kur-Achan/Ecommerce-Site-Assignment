import { UseGetProducts } from "./utils";
 import { useEffect,useState } from "react";


 export const GetProducts=()=>{
const [products,setProducts]=useState([]);
const [error,setError]=useState('');


useEffect(()=>{
    const fetchProducts= async ()=>{
        try{
       
            const result = await UseGetProducts();
            setProducts(result);
            
        }catch(error){
            setError(`Error: ${error.message}`)
       
        }
    };
    fetchProducts();
}, []);
if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{width: '200px'}} />
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );

};