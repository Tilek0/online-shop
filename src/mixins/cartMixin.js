import myButton from "../components/myButton";
import {mapActions, mapGetters} from "vuex";

export default {
    components: {
        myButton
    },
    computed: {
        ...mapGetters([
            'GET_CART',
        ]),
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_PRODUCT',
            'DECREMENT_PRODUCT'
        ]),
        deleteCard(i) {
            this.DELETE_FROM_CART(i)
        },
        increment(i) {
            this.INCREMENT_PRODUCT(i)
        },
        decrement(i) {
            this.DECREMENT_PRODUCT(i)
        }
    }
}