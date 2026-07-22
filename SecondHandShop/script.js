let total=0;

function add(){

total++;

document.getElementById("cart").innerHTML=total;

}

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(function(card){

if(card.innerText.toLowerCase().includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

//contact
function sendMessage(event){

event.preventDefault();

alert("Thank you! Your message has been sent.");

event.target.reset();

}

//cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function addCart(name, price, image){

    let product = cart.find(item => item.name === name);

    if(product){

        product.quantity++;

    }else{

        cart.push({
            name:name,
            price:price,
            image:image,
            quantity:1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();

}

function updateCart(){

    const count = document.getElementById("count");

    if(count){

        count.textContent = cart.reduce((sum,item)=>sum+item.quantity,0);

    }

}
