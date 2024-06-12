 
let shoppingcard = [
  {
    Name: "JBL speaker",
    Details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum, vitae neque  ",
    Price: "$200",
    Rating: [1, 2, 3, 4, 5],
    button: "ADD TO CART",
    Discount: "Discount 20% OFF",
    image: "./speaker.png",
  },
  {
    Name: "Apple Watch",
    Details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum, vitae neque  ",
    Price: "$500",
    Rating: [1, 2, 3, 4, 5],
    button: "ADD TO CART",
    Discount: "Discount 20% OFF",
    image: "./watch.png",
  },
  {
    Name: "Addidas Shoe",
    Details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum, vitae neque  ",
    Price: "$100",
    Rating: [1, 2, 3, 4, 5],
    button: "ADD TO CART",
    Discount: "Discount 20% OFF",
    image: "./shoe.png",
  },
  {
    Name: "Monitor",
    Details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum, vitae neque  ",
    Price: "$800",
    Rating: [1, 2, 3, 4, 5],
    button: "ADD TO CART",
    Discount: "Discount 20% OFF",
    image: "./monitor.png",
  },
  {
    Name: "Macbook",
    Details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum, vitae neque  ",
    Price: "$1200",
    Rating: [1, 2, 3, 4, 5],
    button: "ADD TO CART",
    Discount: "Discount 20% OFF",
    image: "./mac.png",
  },
];
let display = document.getElementById("nameid");
 
shoppingcard.map((value, index) => {
  let stars = "";
  value.Rating.map((item, index) => {
    stars += `
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102zM12 12.25"/></svg>
      `;
  });
 
  display.innerHTML += `
 
<div class="main">
 
<div class="images">
<img src=${value.image} />
</div>
 
<div class="name">
<h1>${value.Name}</h1>
</div>
 
<div class="details">
<p>${value.Details}</p>
</div>
 
<div class="bottom">
 <div class="price">
 <h1>${value.Price}</h1>
 </div>
            <div class="bottomright">
              <div class="rating">
      ${stars}
      </div>
          <div class="horizontal-line"></div>
           <div class="discount">
    <h3>${value.Discount}</h3> </div>
</div>
 
 </div>
  <div class="buy">
 <button>${value.button}</button>
 </div>
</div>
 
 
 
 
</div>`;
});
 