let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}
const filterInput = document.getElementById('filter');
const listItems = document.querySelectorAll('#list li');

filterInput.addEventListener('input',function() {
    const filterValue = filterInput.ariaValueMax.toLowerCase();
    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filterValue) ?
        'block' : 'none';
    }); 
});
 
/*api calling
const isbn = '0451526538';
const apiUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json`;


fetch("https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json")
  .then(response => response.json())
  .then(data => {
    const book = data[`ISBN:${isbn}`];
    console.log(book.title);
    console.log(book.authors);
    console.log(book.publish_date);
  })
  .catch(error => console.log(error));*/

 /* const authorName = 'J. K. Rowling';
const apiUrl = `https://openlibrary.org/search.json?author=${encodeURIComponent(authorName)}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const authorBooks = data.docs.filter(doc => doc.author_name.includes(authorName));
    console.log(authorBooks);
  })
  .catch(error => console.log(error));

  const bookUrl = 'https://openlibrary.org/works/OL45883W';
const apiUrl = `${bookUrl}.json`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const covers = data.cover;
    if (covers) {
      console.log(covers[0]);
    } else {
      console.log('No cover available.');
    }
  })
  .catch(error => console.log(error)); */
 //api calling
/*  let p = fetch("https://goweather.herokuapp.com/weather/Ny")
  p.then((value1)=> {
    return value1.json()
  }) .then((value2)=> {
     console.log( value2)
  })*/

     //search
 /*    function search() {
        const searchbox = document.getElementById("search-item").value.toUpperCase();
        const storeitems = document.getElementById("Product-list");
        const product = document.querySelectorAll("product");
        const pname = storeitems.getElementsByTagName("p2");

        for (var i=0; i < pname.length; i++) {
            let match = product[i].getElementsByTagName("p2")[0];
       
            if(match) {
                let textvalue= match.textContent || match.innerHTML;
             
                if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                    product[i].style.display = "";
                    } else { 
                        product[i].style.display = "none";
                }
            }
        }
     }*/
    function onp() {
      window.open('p1.html','_blank');
    }

    function about() {
      window.open('about.html','_blank');
    }

    function services() {
      window.open('services.html','_blank');
    }

    function contact() {
      window.location.href='contact.html';
    }

        function searchFunction() {
          const input = document.getElementById('searchInput');
          const filter = input.value.toLowerCase();
          const ul = document.getElementById('searchList');
          const li = ul.getElementsByTagName('li');
      
          for (let i = 0; i < li.length; i++) {
              const textValue = li[i].textContent || li[i].innerText;
              if (textValue.toLowerCase().indexOf(filter) > -1) {
                  li[i].style.display = '';
              } else {
                  li[i].style.display = 'none';
              }
          }
      }

      fetch('/api/get_books')
  .then(response => response.json())
  .then(data => {
      console.log(data);
  });

      