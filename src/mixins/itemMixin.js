import {mapActions, mapGetters} from "vuex";

export default {
    data() {
        return {
            buttonText: 'addToBag',
            emptySize: false,
            selectedSize: null,
            checkedColor: 0,
        }
    },
    computed: {
        ...mapGetters([
            'GET_PRODUCT'
        ])
    },
    methods: {
        ...mapActions([
            'CATCH_CART',
        ]),
        addToBug() {
            if (this.selectedSize !== null) {
                let image = JSON.parse(JSON.stringify(this.GET_PRODUCT));
                image.id = this.uid;
                image.selectedSize = this.selectedSize;
                image.image = image.image[this.checkedColor];
                delete image.colors;
                delete image.sizes;
                this.CATCH_CART(image);
            } else {
                this.buttonText = 'selectSizeNote';
                this.emptySize = true;
            }
        },
        addSize(one) {
            this.selectedSize = one;
            this.emptySize = false;
            this.buttonText = 'addToBag';
        },
        takeColor (i) {
            this.checkedColor = i;
        },
    }
}