const initialState = {
    sitePage: '',
    products: [],
    carousel: {
        "id": 1,
        "image1": "",
        "image2": "",
        "image3": "",
        "image4": "",
        "image5": "",
        "text1": "",
        "text2": "",
        "text3": "",
        "text4": "",
        "text5": "",
        "site": "",
        "created_at": "",
        "updated_at": ""
        }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SETSITEPAGE":
            return {...state, sitePage: action.site};
        case "SETSITEPRODUCTS":
            return {...state, products: action.products}
        case "SETSITECAROUSEL":
            console.log(action.carousel);
            return {...state, carousel: action.carousel}
        default: 
            return state;
    }
}

export default rootReducer;