import React from "react";
import css from "./page.module.css";
import ProductCard from "../components/ProductCard";

const products = [
    {
        name: "Nome produto",
        value: 2.5,
        url: "https://images.unsplash.com/photo-1582493255270-b3844e2a63c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJ1ZmElMjBkZSUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Nome produto",
        value: 2.5,
        url: "https://images.unsplash.com/photo-1582493255270-b3844e2a63c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJ1ZmElMjBkZSUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Nome produto",
        value: 2.5,
        url: "https://images.unsplash.com/photo-1582493255270-b3844e2a63c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJ1ZmElMjBkZSUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Nome produto",
        value: 2.5,
        url: "https://images.unsplash.com/photo-1582493255270-b3844e2a63c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJ1ZmElMjBkZSUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Nome produto",
        value: 2.5,
        url: "https://images.unsplash.com/photo-1582493255270-b3844e2a63c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJ1ZmElMjBkZSUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
];

const Products = () => {
    return (
        <main className={css.page}>
            <h1>Todos os produtos</h1>
            <ul>
                {products.map((produto, i) => (
                    <li key={i + produto.name}>
                        <ProductCard
                            name={produto.name}
                            url={produto.url}
                            value={produto.value}
                        />
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Products;
