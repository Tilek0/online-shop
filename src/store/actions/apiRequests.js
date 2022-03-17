import axios from "axios";

export default {
    async CATCH_ALL_PRODUCTS({commit}){
        try {
            await axios.get('https://wear-online-shop.herokuapp.com/products',
            ).then((products) => {
                commit('PUT_ALL_PRODUCTS', products.data);
                return products
            })
        } catch(error) {
            console.log(error);
            return error;
        }
    },
    async CATCH_FOR_FILTER({commit}) {
        try {
            await axios.get('https://wear-online-shop.herokuapp.com/filter',
            ).then((filteredProducts) => {
                commit('PUT_FOR_FILTER', filteredProducts.data)
                return filteredProducts
            })
        } catch(error) {
            console.log(error);
            return error;
        }
    },
}