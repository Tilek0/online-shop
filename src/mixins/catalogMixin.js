import {mapGetters} from "vuex";

export default {
    data() {
        return {
            like: false,
            firstColor: 0,
            secondColor: 0,
        }
    },
    watch: {
        catalog() {
            this.firstColor = 0;
            this.secondColor = 0;
        }
    },
    computed: {
        ...mapGetters([
            'GET_CATALOG',
        ]),
        catalog() {
            return this.GET_CATALOG;
        }
    },
    methods: {
        toItem(item) {
            this.$router.push({name: 'Items', query:{product: item} ,params: {data_item: item}})
        },
        takeColor(color,index,i) {
            this.firstColor = index;
            this.secondColor = i;
        },
    }
}