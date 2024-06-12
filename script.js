let mydetails = [
  {
    name: "Shoe",
    price: "Price: $200",
    image: "./image/shoes.webp",
    rating: "star"
  },
  {
    name: "Bag",
    price: "Price: $100",
    image: "./image/laptop.jpeg",
  },
  {
    name: "Iphone",
    price: "Price: $1100",
    image: "./iphone.webp",
  },
];
let display = document.getElementById("nameid");

mydetails.map((val, index) => {
  console.log(val.name);
  console.log(val.address);

  display.innerHTML += `<div class="main">
   
         <img src=${val.image} />
      <div class="texts">
         <h1>${val.name} </h1>
      </div>
      <div class="price">
   <h2>${val.price}</h1>
      </div>
      <div class="price">
   <h2>${val.rating}</h1>
   
      </div>`; // js bata html access garna innerHTML use hunxa
});