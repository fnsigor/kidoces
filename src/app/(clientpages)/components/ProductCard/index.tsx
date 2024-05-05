import React from "react";
import style from "./component.module.css";
import Image from "next/image";

interface IProps {
    url: string;
    name: string;
    value: number;
    whatsapp: string;
}

const ProductCard = ({ name, url, value, whatsapp }: IProps) => {
    return (
        <aside className={style.component}>
            <Image src={url} alt={name} width={200} height={200} />

            <div>
                <h6>{name}</h6>

                <span>{`R$${value}`}</span>

                <a href={`https://api.whatsapp.com/send/?phone=55${whatsapp}&text=Ol%C3%A1%2C+gostaria+de+um+orcamento&type=phone_number&app_absent=0`} target="_blank">
                    Solicitar orçamento
                </a>
            </div>
        </aside>
    );
};

export default ProductCard;
