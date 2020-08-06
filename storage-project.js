window.addEventListener("DOMContentLoaded", (event) => {

  const showCart = () => {
    
    const shoppingCartDiv = document.createElement("div");
    const itemContainer = document.createElement("ol");
    
    for(let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let quantity = localStorage.getItem(key);
      let parseKey = JSON.parse(key);
      let parseQuantity = JSON.parse(quantity);
      const listEl = document.createElement("li");
      let listedItem = `${parseKey} - ${parseQuantity}`;
      shoppingCartDiv.setAttribute("class", "shopping-cart-items");
      listEl.innerHTML = listedItem;
      itemContainer.appendChild(listEl);
    }
    document.body.appendChild(shoppingCartDiv);
    shoppingCartDiv.appendChild(itemContainer);
  };

  const storeItem = (e) => {
    e.preventDefault();
    const addedItem = JSON.stringify(document.getElementById("items").value);
    const numberOfItems = JSON.stringify(document.getElementById("quantity").value);
    localStorage.setItem(addedItem,numberOfItems);
    showCart();
  };
  
  const submitButton = document.getElementById("add-to-cart")
  submitButton.addEventListener("click", storeItem)
  
  // const removeItem = () => {

  // };

});
