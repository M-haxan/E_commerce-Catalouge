let search_bar = document.querySelector(".search-bar");
let products= document.querySelectorAll(".card");
search_bar.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  products.forEach(card =>{
    let title = card.querySelector("h3").textContent.toLowerCase()
    const invisible = title.includes(value);
    card.classList.toggle("hide", !invisible);
    console.log(value);
  })
  
});
// let products = [];
// console.log(products);
// let des = document.querySelectorAll("h3");
// for (id of card){
//     products.push(id);
//     console.log(id.textContent);
// }