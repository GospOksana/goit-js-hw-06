const categories = document.querySelectorAll('ul#categories .item');
console.log('Number of categories: ', categories.length);

categories.forEach(function(el) { 
    const nameCatogory = el.querySelector('h2');
    const elemCategory = el.querySelectorAll('ul li');
    console.log('Category: ', nameCatogory.textContent);
    console.log('Elements: ', elemCategory.length);
})