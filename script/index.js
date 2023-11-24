let bagItem;
onLoad();
function onLoad(){
  let bagItemStr=localStorage.getItem('bagItem');
  bagItem=bagItemStr? JSON.parse(bagItemStr):[];
  DisplayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId){
bagItem.push(itemId);
localStorage.setItem('bagItem',JSON.stringify(bagItem));
displayBagIcon();
}


 function displayBagIcon(){
  let bagItemCountElement=document.querySelector('.bag-item-count');
  if(bagItem.length>0){
    bagItemCountElement.style.visibility='visible';
    bagItemCountElement.innerText=bagItem.length;
  }
  else{
    bagItemCountElement.style.visibility='hidden';
  }
 }
 

function DisplayItemsOnHomePage(){
  let itemsContainerElement=document.querySelector('.items-container');
  if(!itemsContainerElement){
    return;
  }
  let innerHTML='';
  items.forEach(item=>{
    innerHTML+=`<div class="item-container">
    <img class="item-image" src="${item.image}" alt="item image">
    <div class="rating">
      <b> ${item.rating.stars} ⭐ |${item.rating.count} </b>
    </div>
    <div class="company-name">
      <b>  ${item.company}</b>
    </div>
    <div class="item-name">
        ${item.item_name}
    </div>
    <div class="price">
        <span class="current-price">${item.current_price}</span>
        <span class="orignal-price">${item.original_price}</span>
        <span class="discount">${item.discount_percentage}</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
  </div>`
  });
  itemsContainerElement.innerHTML=innerHTML;
}
