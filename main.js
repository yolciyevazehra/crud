let BASE_API = 'https://fakestoreapi.com/products'

fetch(BASE_API)
.then(res => {
    if(res.status === 200){
        console.log('ugurlu')
    }else if(res.status === 400){
        console.log('ugursuz')
    }
})