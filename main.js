const product=[
    {
        id:0,
        image:"https://5.imimg.com/data5/RF/XA/MY-39192834/t-shirt.jpg",
        title:"Red Plain Mens T-Shirt",
        price: 200
    },
    {
        id:1,
        image:"o.jpg",
        title:"Ladies Oversized T-Shirt",
        price: 600
    },
    {
        id:2,
        image:"r.jpg",
        title:"Red Female T-Shirt",
        price: 400
    },
    {
        id:3,
        image:"g.jpg",
        title:" Grey Ladies Oversized T-Shirt",
        price: 600
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]

document.getElementById("searchBar").addEventListener('keyup',(e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
})



const displayItem = (items) =>{
    document.getElementById("root").innerHTML=items.map((item)=>
{
    var{image,title,price}=item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                <p>${title}</p>
                <h2>Rs:${price}.00</h2>`+
                
                `</div>
                </div>`
    )
}
).join('');    
};

displayItem(categories);

    let i=0;

    
document.getElementById("root").innerHTML=categories.map((item)=>
{
    var{image,title,price}=item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                <p>${title}</p>
                <h2>Rs:${price}.00</h2>`+
                "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                `</div>
                </div>`
    )
}
).join('');    



var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
   
    if(cart.length==0){
        document.getElementById("cartItem").innerHTML="Your cart is empty";
        document.getElementById("total").innerHTML="$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML= cart.map((items)=>
        {
            var { image, title, price } = items;
            total=total+price;
            document.getElementById("total").innerHTML="$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                   <img class='rowimg' src=${image}>
                   </div>
                   
                   <p style='font-size:12px;'>${title}</p>
                   <h2 style='font-size:15px;'>Rs:${price}.00</h2>`+
                   "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}