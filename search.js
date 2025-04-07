let search_bar = document.querySelector(".search-bar"); 
let products= document.querySelectorAll(".card"); 
search_bar.addEventListener("input", e => {
  const value = e.target.value.toLowerCase(); // Get the Values from Search bar 
  products.forEach(card =>{
    let title = card.querySelector("h3").textContent.toLowerCase()
    const invisible = title.includes(value); //check if input value is include in our products Array 
    card.classList.toggle("hide", !invisible);
    console.log(value);
  })
});
