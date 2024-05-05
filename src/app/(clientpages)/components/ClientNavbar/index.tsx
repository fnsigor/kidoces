import Link from "next/link";
import React from "react";
import style from './style.module.css'

const ClientNavbar = () => {
    return (
        <nav className={style.component}>
            <h5>Ki Doces</h5>
            <ul>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/products"}>Produtos</Link>
                </li>
            </ul>
            <div>
                <input type="text" />
                <button>Pesquisar</button>
            </div>
        </nav>
    );
};

export default ClientNavbar;
