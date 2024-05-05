"use client";

import Link from "next/link";
import React, { useState } from "react";
import style from "./style.module.css";
import { useRouter } from "next/navigation";

const ClientNavbar = () => {

    const [productName, setProductName] = useState("");

    const router = useRouter();

    return (
        <nav className={style.component}>
            <Link href={"/"}>
                <h5>Ki Doces</h5>
            </Link>
            <ul>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/products"}>Produtos</Link>
                </li>
            </ul>
            <div>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <button
                onClick={() => {
                    router.push(`/products?productName=${productName}`)
                }}
                >Pesquisar</button>
            </div>
        </nav>
    );
};

export default ClientNavbar;
