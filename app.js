window.onload = (event) => {
  fetch("products.json") //Fetch data from Json file
    .then((response) => (data = response.json()))
    .then((data) => {
      let productArray = data.products; //storin data of products in Array
      let productId = new URLSearchParams(window.location.search).get("id"); //Get id from HTML file by URL to match id with JSON Data 
      let product = productArray.find((p) => p.id == productId);  // Find the data of ID from jSOn File 
      if (product) {
        document.querySelector(".pro-img").src = product.images[0];
        document.querySelector(".des").textContent = product.description;
        document.querySelector(".price").textContent = product.price;
        let final_price_span = (document.getElementById("price").textContent =product.final_price);
        let features = document.querySelector(".features");
        Object.keys(product.features).forEach((key) => {
          const li_features = document.createElement("li");
          li_features.textContent = `${key.replace("_", " ")}: ${
            product.features[key]
          }`;
          features.appendChild(li_features);
        }); // Display feature of product
        let cart_btn = document.querySelector(".btn"); // Store the product in MY CARt by using LOCAL Storage of Browser
        cart_btn.addEventListener("click", () => {
          console.log("Button clik");
          let productArray = JSON.parse(localStorage.getItem("ID")); 
          if(productArray == null) {
            productArray = [];
            productArray[0] = productId
            localStorage.setItem("ID", JSON.stringify(productArray))  
          } else {
           if (!productArray.includes(productId)) {  // check if same product already stored
              productArray.push(productId);
            }
            localStorage.setItem("ID", JSON.stringify(productArray))
          }
      });
      } else {
        document.body.innerHTML = "<h1>product not found</h1>";
      }
    })
    .catch((error) => console.error("Error loading JSON:", error));
};
