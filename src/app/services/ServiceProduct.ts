import { api } from "@/config/axios"

export class ServiceProduct {
    getAllProducts = async (limit: number | undefined = undefined) => {
        try {

            const res = await api.get('/getAllProducts', {
                params: {
                    limit
                }
            })

            return { success: true, data: res.data.products }
        } catch (error) {
            console.log(error)
            return { success: true }
        }
    }
}