import { api } from "@/config/axios"

export class ServiceProduct {
    getAllProducts = async (limit: number | undefined = undefined, name: string | undefined = "") => {
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