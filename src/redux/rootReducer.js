const initialState = {
    sitePage: 'null',
    products: [],
    productFields: [],
    carouselSlidesData: {
        'null': [],
        'bikes': [
          {
            image: 'https://pictures.ssg-service.com/roa/road-bike-guide-hero-fix-1600x800-1688712_original_1.jpg',
            content: 'brand new range of road bikes, so get  out there and beat those personal bests!!!!'
          },{
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Norco_Range.jpg/2560px-Norco_Range.jpg',
            content: 'some shit about mountains and biking and that yaaa'
          },{
            image: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2020/07/02/11/vanmoof-bike-review2-0407.jpg?w968',
            content: 'check out all our new electric and hybrid bikes'
          }
        ],
        'sofas': [
          {
            image: 'https://i1.adis.ws/i/fv/PRODZFRSP000000000030743_sofisticat_2-seater-classic-back-fabric-sofa__lifestyle?$large$&w=350&fmt=webp&fmt=webp',
            content: 'brighten up your home with these new colours, great for blah blah blah'
          },{
            image: 'https://i1.adis.ws/i/fv/PRODZFRSP000000000030312_home_large-fabric-corner-sofa__lifestyle?$large$&w=455&fmt=webp&fmt=webp',
            content: 'more than enough room for all the family blah blah'
          },{
            image: 'https://i1.adis.ws/i/fv/PRODZFRSP000000000038934_soho_3-seater-sofa__lifestyle?$large$&w=350&fmt=webp&fmt=webp',
            content: 'check out all our deluxe range of stylish modern sofas'
          }
        ],
        'hats': [
          {
            image: 'https://i0.wp.com/jermynstreetjournal.com/wp-content/uploads/2019/09/ALBANY_ESCORIAL_TAUPE__0206-e1568663091600.jpg?fit=2121%2C1126&ssl=1',
            content: 'mens hats for special occasions'
          },{
            image: 'https://lh3.googleusercontent.com/proxy/pnIJdTgShY3rM-zbYHDntOQA2wNMtNx6AK2DvN5ED6_WbaX1n1xy15EPiOhr96a1FMO0xgiwnHkOqvHcYcDvSPytgtZdAdy5JvDR3CFECnt0XrEKUfLKxIp8QaGBjOdmMEu_s8M',
            content: 'womens hats for special occasions'
          },{
            image: 'https://eclipsemagazine.co.uk/wp-content/uploads/2020/05/Lock-and-Co-hat-comp-main.jpg',
            content: 'womens hats with a twist!'
          }
        ],
        'plants': [
          {
            image: 'https://sc-wordpress-assets.s3.amazonaws.com/uploads/2020/04/PatchPlants.png',
            content: 'indoor plants to re-imagine your home'
          },{
            image: 'https://www.essentialliving.co.uk/wp-content/uploads/2019/02/1-_Patch-Content.jpg',
            content: 'plants of all sizes to fit your needs'
          },{
            image: 'https://cdn.vox-cdn.com/thumbor/lAMF6VqqzKbnmLJkHEA-wo0NhwQ=/0x0:5770x3743/1200x800/filters:focal(2515x1771:3437x2693)/cdn.vox-cdn.com/uploads/chorus_image/image/59670279/bloomscape_lifestyle_plant_shelfie.0.jpg',
            content: 'carry on your collection with our new range of smaller pots and plants'
          }
        ]
      }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SETSITEPAGE":
            return {...state, sitePage: action.site};
        case "SETSITEPRODUCTS":
          return {...state, products: action.products, productFields: Object.keys(action.products[0])}
        case "SETSITECAROUSEL":
            return {...state, carousel: action.carousel}
        default: 
            return state;
    }
}

export default rootReducer;