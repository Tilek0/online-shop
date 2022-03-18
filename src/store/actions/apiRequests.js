import axios from "axios";

export default {
    async CATCH_ALL_PRODUCTS({commit}){
        try {
            const products = await axios.get('https://wear-online-shop.herokuapp.com/products',)
            await commit('PUT_ALL_PRODUCTS', products.data);
            return products
        } catch(error) {
            console.log(error);
            return error;
        }
    },
    async CATCH_FOR_FILTER({commit}) {
        try {
            const filteredProducts = await axios.get('https://wear-online-shop.herokuapp.com/filter',)
            await commit('PUT_FOR_FILTER', filteredProducts.data);
            return filteredProducts
        } catch(error) {
            console.log(error);
            return error;
        }
    },
}