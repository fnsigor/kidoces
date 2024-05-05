'use client'

import React from "react";
import css from "./page.module.css";
import ProductCard from "../components/ProductCard";
import { ServiceProduct } from "@/app/services/ServiceProduct";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

const Products = () => {


    const searchParams = useSearchParams()


    const {data: products, isLoading} = useQuery({
        queryFn: () => new ServiceProduct().getAllProducts(undefined, searchParams.get('productName') as any),
        queryKey: ['lista', searchParams.get('productName')],
        staleTime: 60 * 5 * 5
    })

    return (
        <main className={css.page}>
            <h1>Todos os produtos</h1>
            {isLoading ? (<p>buscando produtos</p>) : (
                <ul>
                {products?.data?.map((produto, i) => (
                    <li key={i + produto.name}>
                        <ProductCard
                            name={produto.name}
                            url={produto.imageUrl}
                            value={produto.value}
                            whatsapp={produto.seller.whatsapp}
                        />
                    </li>
                ))}
            </ul>
            )}
        </main>
    );
};

export default Products;
