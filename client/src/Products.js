// src/Products.js
import './Products.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('/products')
            .then((res) => {
                console.log(res.data); // Überprüfen der Struktur der zurückgegebenen Daten
                const products = res.data;
                setData(products);
            })
            .catch((error) => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    return (
        <div className='container my-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.product_id}>
                        <td>{item.product_id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products;
