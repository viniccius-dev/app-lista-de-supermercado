var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var nameProduct = document.querySelector('input[name=nameProduct]');
    var priceProduct = document.querySelector('input[name=price]');

    items.push({
        name: nameProduct.value,
        value: priceProduct.value
    });

    /*

    <div class="list-product-single">
        <h3>Redbull</h3>
        <h3 class="price-product"><span>R$10,00</span></h3>
    </div>

    */

    let listProducts = document.querySelector('.list-products')
    let sum = 0;

    listProducts.innerHTML = "";

    items.map(function(val){
        sum+=parseFloat(val.value);
        listProducts.innerHTML+=`
        
        <div class="list-product-single">
            <h3>`+val.name+`</h3>
            <h3 class="price-product"><span>R$`+val.value+`</span></h3>
        </div>


        `;
    });

    sum = sum.toFixed(2);
    nameProduct.value = "";
    priceProduct.value = "";

    let elementSum = document.querySelector('.sum-product h1');
    elementSum.innerHTML = 'R$'+sum;

})

document.querySelector('button[name=clean]')
.addEventListener('click',()=>{
    items = [];

    document.querySelector('.list-products').innerHTML = "";
    document.querySelector('.sum-product h1').innerHTML = "R$0,00"
})