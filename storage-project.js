
window.addEventListener("DOMContentLoaded", (event) => {

  // largerDiv.appendChild(itemContainer);
  
  const showCart = () => {
    const largerDiv = document.getElementById("shopping-cart")
    const itemContainer = document.createElement("ol");
    largerDiv.innerHTML = "<h2> Shopping Cart </h2>";
    largerDiv.appendChild(itemContainer);
    let itemId = 0;
    for(let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let quantity = localStorage.getItem(key);
      let parseKey = JSON.parse(key);
      let parseQuantity = JSON.parse(quantity);
      
      
      let listedItem = `<li><button class="ui icon button" id=${itemId}"><i class="trash alternate outline icon"></i>Remove</button>${parseKey}: ${parseQuantity}</li>`;
      // if(document.getElementById(`${itemId}` === undefined)
      itemContainer.innerHTML += listedItem;   
      itemId++;
    }
    // localStorage.setItem("saved-cart", "true")
    
    
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
  

  const removeItem = (e) => {
    console.log(e.target.id);
    // get access to button ids
    // use ids to remove item from local storage
    // call showCart again.

    console.log(localStorage);

    let itemIndex = e.target.id;
    const item = localStorage.key(itemIndex);
    localStorage.removeItem(item);

    // console.log("now ", localStorage);

    showCart();
  };

  const removeBtns = document.getElementById("shopping-cart");
  removeBtns.addEventListener("click", e => {
    e.preventDefault();
    removeItem(e);
  });

});
