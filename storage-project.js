window.addEventListener("DOMContentLoaded", (event) => {

  const showCart = () => {
  
  };

  const storeItem = (e) => {
    const addedItem = JSON.stringify(document.getElementById("items").value);
    const numberOfItems = JSON.stringify(document.getElementById("quantity").value);
    localStorage.setItem(addedItem,numberOfItems);
    showCart()l
  };
  
  const submitButton = document.getElementById("add-to-cart")
  submitButton.addEventListener("click", storeItem)
  
  // const removeItem = () => {

  // };

});
