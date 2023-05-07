const categoryList = document.querySelector('#categories');
// const allCategories = categoryList.querySelectorAll('li.item');
console.log("Number of categories:", categoryList.children.length);


[...categoryList.children].forEach((category) => {
    const headerEl = category.firstElementChild.textContent;
    console.log("Category:", headerEl);
    const elementsArr = category.lastElementChild.children;
    console.log("Elements:", elementsArr.length);
}
)

// const categoryNames = [];
// allCategories.forEach((category, i) => {
//     const header = category.querySelector('h2');
//     const headerName = header.textContent;
//     categoryNames.push(headerName);
//     console.log("Category:", categoryNames[i]);
//     const categoryChildrenArray = category.querySelectorAll('li');
//     console.log("Elements:", categoryChildrenArray.length);
// })

