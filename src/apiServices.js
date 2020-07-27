import axios from 'axios'

const transformData = (response) => {
    const keys = Object.keys(response.data);
    const products = [];
    for (const key of keys) {
        products.push({ id: key, ...response.data[key] })
    }
    return products
}

export const getProducts = () => {
    return axios.get(`https://bc22-72ac2.firebaseio.com/shop/products.json`).then(response => transformData(response))
}

export const deleteProduct = (id) => {
    console.log(id)
    return axios.delete(`https://bc22-72ac2.firebaseio.com/shop/products/${id}.json`)
}
