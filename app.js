// document.addEventListener("DOM", function () {

window.onload = (event) => {
  fetch("products.json")
    .then((response) => (data = response.json()))
    .then((data) => {
      let productArray = data.products;
      let productId = new URLSearchParams(window.location.search).get("id");
      console.log(productId);

      let product = productArray.find((p) => p.id == productId);
      let products_arr =[];
      console.log(products_arr);
      console.log("Hello")
      for(element of product){
        products_arr.push(element.description);
        
        
      }
      if (product) {
        document.querySelector(".pro-img").src = product.images[0];
        document.querySelector(".des").textContent = product.description;
        document.querySelector(".price").textContent = product.price;
        let final_price_span = (document.getElementById("price").textContent =
          product.final_price);
        let features = document.querySelector(".features");
        Object.keys(product.features).forEach((key) => {
          const li_features = document.createElement("li");
          li_features.textContent = `${key.replace("_", " ")}: ${
            product.features[key]
          }`;
          features.appendChild(li_features);
        });
        console.log(Object.keys(product.features));

        console.log(final_price_span);
        let cart_btn = document.querySelector(".btn");
        
        cart_btn.addEventListener("click", () => {
          console.log("Button clik");
          let productArray = JSON.parse(localStorage.getItem("ID"));
          if(productArray == null) {

            console.log(productArray, " from if");
            productArray = [];
            productArray[0] = productId
            localStorage.setItem("ID", JSON.stringify(productArray))  
          } else {
            console.log(productArray);
            //  for (newarr of productArray){
            //   if(newarr!=productId){
            //   productArray.push(productId) 
            //    }else{
            //       let index = newarr;
            //     productArray.splice(index, 1);
            //   }
            // }
            if (!productArray.includes(productId)) {
              productArray.push(productId);
            }
           
            localStorage.setItem("ID", JSON.stringify(productArray))
          }
          console.log("something")
        //   localStorage.getItem("ID").parse
        //   localStorage.setItem("ID", productId);
        });
      } else {
        document.body.innerHTML = "<h1>product not found</h1>";
      }
    })

    .catch((error) => console.error("Error loading JSON:", error));
};
