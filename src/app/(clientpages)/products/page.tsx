'use client'

import React from "react";
import css from "./page.module.css";
import ProductCard from "../components/ProductCard";
import { ServiceProduct } from "@/app/services/ServiceProduct";
import { useSearchParams } from "next/navigation";

const Products = async () => {


    const searchParams = useSearchParams()

    const products = (await new ServiceProduct().getAllProducts(undefined, searchParams.get('productName') as any)) as {
        success: boolean;
        data?: {
            id: string;
            name: string;
            value: number;
            imageUrl: string;
            seller: {
                whatsapp: string;
            };
        }[];
    };

    return (
        <main className={css.page}>
            <h1>Todos os produtos</h1>
            <ul>
                {products.data?.map((produto, i) => (
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
        </main>
    );
};

export default Products;
