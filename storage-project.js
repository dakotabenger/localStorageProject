
window.addEventListener("DOMContentLoaded", (event) => {
  const largerDiv = document.getElementById("shopping-cart")
  const itemContainer = document.createElement("ol");
  const showCart = () => {
    largerDiv.innerHTML = "<h2> Shopping Cart </h2>";
    for(let i = 0; i < localStorage.length; i++) {
      if (i === 1) {
        continue;
      }
      let key = localStorage.key(i);
      let quantity = localStorage.getItem(key);
      let parseKey = JSON.parse(key);
      let parseQuantity = JSON.parse(quantity);
      let listedItem = `<li><button class="ui icon button"><i class="trash alternate outline icon"></i>Remove</button>${parseKey}: ${parseQuantity}</li>`;
      itemContainer.innerHTML += listedItem;   
      largerDiv.appendChild(itemContainer);
    }
    localStorage.setItem("saved-cart", "true")
    
    
  };
  
  if (localStorage.getItem("saved-cart") !== null) {
    showCart();
    }
  
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
