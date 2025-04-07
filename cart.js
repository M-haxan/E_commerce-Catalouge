     let id= JSON.parse(localStorage.getItem("ID")); // Get The Array of Product ID from Local Storage
    fetch("products.json")
      .then((response) => (data = response.json()))
      .then((data) => {
        let productArray = data.products;
        for (let element of id){ // Traverse the IDs of prducts to Display the product in My Cart
          let product_card= document.querySelector(".product-card");
          let product = productArray.find((p) => p.id == element);
          let div = document.createElement('div');
          div.classList.add("div");
          let img = document.createElement("img");
          img.classList.add("pro-img");
          img.src=product.images[0];
          let h3 = document.createElement("h3");
          h3.textContent= product.name;
          h3.classList.add("h3");
          let p = document.createElement("p");
          p.classList.add("p");
          p.textContent=`Rs. ${product.price}` ;
          let del_btn = document.createElement("button"); // Set Buuton to delete the product from My Cart
          del_btn.textContent="Delete Item";
          del_btn.classList.add("del-btn");
          product_card.appendChild(div);
          div.appendChild(img);
          div.appendChild(h3);
          div.appendChild(p);
          div.appendChild(del_btn);
          console.log("add");
          console.log(product.price);
          del_btn.addEventListener("click", ()=>{ 
            div.remove();
            let pro_id=  JSON.parse(localStorage.getItem("ID"));
            let updated_storage = pro_id.filter(item=> item!==element);
            localStorage.setItem("ID", JSON.stringify(updated_storage)); // Update the Local storage after dleleting the product
          });
        }
      })
      .catch((error) => console.error("Error loading JSON:", error));
