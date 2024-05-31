// const bankBalance = 100000
// return new Promise((resolve, reject) => {
//     setTimeout (() =>{
//      if (bankBalance >90000) {
//         console.log('abba man gaye')
//      }else{ (bankBalance < 80000){
//         console.log('abba ni many ghy');
//      }       
// },1000)
// })

// .then
// .catch


const div = document.querySelector('#products');


axios ('https://fakestoreapi.com/products')
.then ((response=>{
    console.log(response);
    response.data.map((item) => {
        div.innerHTML += `
        <div class="product">
        <h1>${item.title}</h1>
        <img src="${item.image}" alt="product image">
        <h1>price: ${item.price}</h1>
       </div> `
    })
}))

.catch((err)=>{
    console.log(err);
})