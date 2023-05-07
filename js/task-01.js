const categoryList = document.querySelector('ul#categories');
const allCategories = categoryList.querySelectorAll('li.item');
console.log("Number of categories:", allCategories.length);

const categoryNames = [];
allCategories.forEach((category, i) => {
    const header = category.querySelector('h2');
    const headerName = header.textContent;
    categoryNames.push(headerName);
    console.log("Category:", categoryNames[i]);
    const categoryChildrenArray = category.querySelectorAll('li');
    console.log("Elements:", categoryChildrenArray.length);
})

