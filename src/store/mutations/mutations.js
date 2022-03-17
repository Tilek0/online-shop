export default {
    PUT_ALL_PRODUCTS(state, products){
        state.products = products
        localStorage.setItem('allProduct',JSON.stringify(products))
    },
    PUT_FOR_FILTER(state, data) {
        state.searchProducts = data
    },
    PUT_CATEGORY(state, category) {
        state.selectedCategory = category
        localStorage.setItem('category',JSON.stringify(category))

    },
    PUT_CATALOG(state, catalog) {
        state.selectedCatalog = catalog
        localStorage.setItem('catalog',JSON.stringify(catalog))
    },
    PUT_PRODUCT(state, product) {
        state.selectedProduct = product
        localStorage.setItem('product',JSON.stringify(product))
    },
    PUT_CART(state, product) {
        let isProductExists = false;
        if (state.cart.length) {
            state.cart.map(function (item) {
                if (item.id === product.id && item.image.color === product.image.color && item.selectedSize === product.selectedSize) {
                    isProductExists = true;
                    item.quantity++;
                    localStorage.setItem('cart', JSON.stringify(state.cart))
                }
            })
            if (!isProductExists) {
                state.cart.push(product)
                localStorage.setItem('cart',JSON.stringify(state.cart))
            }
        } else {
            state.cart.push(product)
            localStorage.setItem('cart',JSON.stringify(state.cart))
        }
    },
    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1)
        if (state.cart.length) {
            localStorage.setItem('cart',JSON.stringify(state.cart))
        }else {
            localStorage.removeItem('cart')
        }
    },
    INCREMENT: (state, index) => {
        state.cart[index].quantity++
        localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    INCREMENT_CATALOG: (state, index) => {
        if (state.selectedCatalog[index].like <= 1) {
            state.selectedCatalog[index].like++
        }
    },
    DECREMENT_CATALOG: (state, index) => {
        if (state.selectedCatalog[index].like >= 1 || state.selectedCatalog[index].like >= 2) {
            state.selectedCatalog[index].like--
        }
    },
    SET_LOCALE: (state, locale) => {
        state.locale = locale
    },
    SET_MOBILE: (state, boolean) => {
        state.isMobile = boolean
    },
    SET_MOBILE_MODAL: (state, boolean) => {
        state.mobileModal = boolean
    }
}