import {$authHost, $host} from "./index";

export const fetchProducts = async (name) => {
    const {data} = await $host.get('api/product', {params: {name}})
    return data
}
export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}