import {mapActions} from "vuex";

export default  {
    props: {
        category_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        ...mapActions([
            'CATCH_CATALOG'
        ]),
        toCatalog(item) {
            switch (item.name) {
                case 'trousers':
                    this.CATCH_CATALOG(item.trousers);
                    break;
                case 'coat':
                    this.CATCH_CATALOG(item.coat);
                    break;
                case 'shirts':
                    this.CATCH_CATALOG(item.shirts);
                    break;
                case 'shoes':
                    this.CATCH_CATALOG(item.shoes);
                    break;
                case 'outwear':
                    this.CATCH_CATALOG(item.jacket);
                    break;
            }
            this.$router.push({name: 'Catalog', query: {model: item.name}});
        }
    }
}