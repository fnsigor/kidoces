import { api } from "@/config/axios"


interface IProduct {
    id: string;
    name: string;
    value: number;
    imageUrl: string;
    seller: {
        whatsapp: string;
    };
}

export class ServiceProduct {
    getAllProducts = async (limit: number | undefined = undefined, name: string | undefined = ""): Promise<{
        success: boolean
        data?: IProduct[]
    }>=> {
        try {

            const res = await api.get('/getAllProducts', {
                params: {
                    limit,
                    name
                }
            })

            return { success: true, data: res.data.products }
        } catch (error) {
            console.log(error)
            return { success: true }
        }
    }
}