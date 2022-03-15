import {mapActions, mapGetters} from "vuex";
import {debounce} from "lodash/function";

export default {
    data() {
        return {
            locale: [
                'ru-RU',
                'en-US'
            ],
            searchText: '',
            foundFilter: '',
            IsLocale: false,
        }
    },
    mounted() {
        this.CATCH_FOR_FILTER();
    },
    watch: {
        searchText: function(searchText) {
            this.setQuery(searchText);
        }
    },
    computed: {
        ...mapGetters([
            'GET_CART',
            'GET_FOR_FILTER',

        ]),
        localeName() {
            if (this.IsLocale) {
                this.CHANGE_LOCALE(this.locale[0]);
                return this.locale[0];
            }else {
                this.CHANGE_LOCALE(this.locale[1]);
                return this.locale[1];
            }
        }
    },
    methods: {
        ...mapActions([
            'CHANGE_LOCALE',
            'CATCH_FOR_FILTER',
            'CATCH_CATALOG',
        ]),
        switchLocale() {
            this.IsLocale = !this.IsLocale;
        },
        setQuery: debounce(function (searchText){
            if (searchText) {
                this.foundFilter = this.GET_FOR_FILTER.filter(item => {
                    return item.name.toLowerCase().trim() === searchText.toLowerCase().trim();
                })
                if (this.foundFilter.length) {
                    this.CATCH_CATALOG(this.foundFilter);
                    if (this.$route.path !== '/Catalog') {
                        this.$router.push('/Catalog');
                    }
                    return '';
                }
            }
        }, 500),
    }
}