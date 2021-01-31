

//localStorage 是html5一種儲存資料的方法，另一種叫做sessionStorage
// if (!localStorage.getItem('name')) {
//     let myName = prompt('Please enter your name.');
//     localStorage.setItem('name',myName);
//     var myHeading = document.querySelector('h1');
//     myHeading.innerHTML =  'Welcome! ' + localStorage.getItem('name');
// }
// else{
//     var myHeading = document.querySelector('h1');
//     myHeading.innerHTML =  'Welcome! ' + localStorage.getItem('name');
// }
//點擊更換圖片
// var myImage = document.querySelector('img');
// myImage.onclick = function(){
//     let src = myImage.getAttribute('src');
//     if (src == 'images/dontfat.jpg') {
//         myImage.setAttribute('src','images/2.jpg');
//     }
//     else{
//         myImage.setAttribute('src','images/dontfat.jpg');
//     }
// }
//當按下按鈕時，顯示下次要顯示的文字
// var myButton = document.querySelector('button');
// myButton.onclick =  function(){
//     let myName = prompt('Please enter your name.');
//     localStorage.setItem('name',myName);
//     var myHeading = document.querySelector('h1');
//     // myHeading.innerHTML =  'Welcome! ' + localStorage.getItem('name');
// }
//lu的點擊事件
// const ul = document.querySelector('ul');
// var $html = document.querySelector('html');
// $html.addEventListener('click', (e) => {
//     var li = document.createElement('li');
//     const listItem_text = prompt('Add new list item');
//     li.textContent = listItem_text;
//     ul.appendChild(li);

//     li.onclick = function(e){
//         e.stopPropagation(); //停止事件的傳遞 
//         const listContent = prompt('Enter new content for your list item');
//         //對於屬性，使用this. 控制
//         //對於事件，使用e. 控制
//         //目前看起來是這樣。
//         this.textContent = listContent; 
//     }
// })
// const list = document.createElement('ul');
// const info = document.createElement('p');
// const html = document.querySelector('html');

// info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';

// document.body.appendChild(info);
// document.body.appendChild(list);

// html.onclick = function() {
//   const listItem = document.createElement('li');
//   const listContent = prompt('What content do you want the list item to have?');
//   listItem.textContent = listContent;
//   list.appendChild(listItem);

//   listItem.onclick = function(e) {
//     e.stopPropagation();
//     const listContent = prompt('Enter new content for your list item');
//     this.textContent = listContent;
//   }
// }
//如何加入一個元素到html。🤣
// const info = document.createElement('p');
// info.textContent = 'XDD';
// document.body.appendChild(info);
//怎麼加到我要的位置@@
