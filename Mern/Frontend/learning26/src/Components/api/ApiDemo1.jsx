import React, { useState } from "react";
import axios from "axios";

export const ApiDemo1 = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 1</h1>

      <button onClick={getProducts}>GET</button>

      <table border="1" style={{ margin: "20px auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
