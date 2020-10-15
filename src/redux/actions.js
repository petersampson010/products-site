export const setSitePage = site => {
    return {
        type: "SETSITEPAGE",
        site
    }
}

export const  setSiteProducts = products => {
    return {
        type:  "SETSITEPRODUCTS",
        products
    }
}

export const setSiteCarousel = carousel => {
    return {
        type: "SETSITECAROUSEL",
        carousel
    }
}

export const updateRenderedProducts = products => {
    return {
        type: "UPDATERENDEREDPRODUCTS",
        products
    }
}

export const addToBasket = product => {
    return {
        type: "ADDTOBASKET",
        product
    }
}