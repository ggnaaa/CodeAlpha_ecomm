



const productArray =[
    {
        id: 'price_1MJNk7Ac9GzR57XmWV14pcVr',
        image: '/images/sabrianna-9poB8SBFveA-unsplash.jpg' ,
        title: 'Diamond Ring',
        price: '1400.00'
    },
    {
        id: 'price_1MJNo4Ac9GzR57XmiK09NGuV',
        image: '/images/sabrianna-EOAaLXkPyGA-unsplash.jpg', 
        title: 'Engagement Ring',
        price: '300.00'
    },
    {
        id: 'price_1MJNp3Ac9GzR57XmT7iaaMhu',
        image:'/images/sabrianna-lbqW0O09RAM-unsplash.jpg' ,
        title: 'Diamond Necklace',
        price: '600.00'
    },
    {
        id: 'price_1MJNqXAc9GzR57Xmzd37z9ai',
        image:'/images/sabrianna-NhrcL_C0sFA-unsplash.jpg' ,
        title: 'Gold Ring',
        price: '400.00'
    },
    {
        id: 'price_1MJNt2Ac9GzR57Xmlpu6Dbtd',
        image:'/images/hand bracelet 5.jpg' ,
        title: 'Tahiti Bracelet',
        price: '150.00'
    },
    {
        id: 'price_1MJNuLAc9GzR57XmvAF8trex',
        image:'/images/necklace1.jpg' ,
        title: 'Belize Necklace',
        price: '250.00'
    },
    {
        id: 'price_1MJNvSAc9GzR57XmDVp4zgTP',
        image:'/images/hand bracelet 3.jpg' ,
        title: 'Turquoise Bracelet',
        price: '50.00'
    },
    {
        id: 'price_1MJNwJAc9GzR57XmzNp8br90',
        image:'/images/hand bracelet 4.jpg' ,
        title: 'Emerald Bracelet',
        price: '80.00'
    },
    {
        id: 'price_1MJNxRAc9GzR57Xmu8IOP8wM',
        image:'/images/bracelet 4.jpg' ,
        title: 'Onyx Multicolor Bracelet',
        price: '75.00'
    },
    {
        id: 'price_1MJNyeAc9GzR57Xm5472qlSh',
        image:'/images/mathilde-langevin-QgK0yj6kc6k-unsplash.jpg' ,
        title: 'Golden Necklace',
        price: '139.99'
    },
    {
        id: 'price_1MJO02Ac9GzR57XmljIDOrPp',
        image:'/images/bracelet 2.jpg' ,
        title: 'White Gold Bracelt',
        price: '220.00'
    },
    {
        id: 'price_1MJO0lAc9GzR57Xmmv26NVLI',
        image:'/images/bracelet 3.jpg' ,
        title: 'Topaz and Onyx Bracelet',
        price: '300.00'
    },
]

function getProductData(id){
    let productData = productArray.find(product=> product.id === id)

    if (productData == undefined){
        console.log('Product not found for ID: ' + id)
        return undefined
    }
    return productData;
}

export {productArray, getProductData };