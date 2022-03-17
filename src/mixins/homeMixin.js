import {mapActions, mapGetters} from "vuex";

export default {
    mounted() {
        this.CATCH_ALL_PRODUCTS();
        localStorage.clear();
    },
    computed: {
        ...mapGetters([
            'GET_PRODUCTS'
        ])
    },
    methods: {
        ...mapActions([
            'CATCH_CATEGORY',
            'CATCH_ALL_PRODUCTS',
        ]),
        toCategory(i) {
            let category = this.GET_PRODUCTS.find(item => item.name === i)
            this.CATCH_CATEGORY(category.clothes);
            this.$router.push({name: 'Categories', query: {category: i},params: {category_data: category.clothes}});
        },
    }
}