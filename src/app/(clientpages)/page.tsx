import Image from "next/image";
import logo from "@/assets/logo.png";
import style from "./page.module.css";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { ServiceProduct } from "../services/ServiceProduct";

export default async function Home() {
    
    const products = await new ServiceProduct().getAllProducts(4) as {
        success: boolean
        data?: {
            id: string
            name: string,
            value: number,
            imageUrl: string,
            seller: {
                whatsapp: string
            }
        }[]
    }

    console.log(products)

    return (
        <main className={style.page}>
            <header>
                <Image src={logo} alt="Logo KI Doces" />
                <div>
                    <p>
                        Nossas trufas caseiras são uma explosão de sabor em cada
                        mordida, feitas com os melhores ingredientes para
                        garantir a melhor experiência doce.
                    </p>
                    <p>
                        Aqui, cada trufa é mais que um doce, é uma expressão de
                        carinho
                    </p>
                    <p>Descubra o verdadeiro sabor do amor com a Ki Doces!</p>
                </div>
            </header>

            <section>
                <header>
                    <h6>últimos produto anunciados</h6>
                    <Link href="/products">Ver mais</Link>
                </header>
                <div>
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
                </div>
            </section>
        </main>
    );
}
