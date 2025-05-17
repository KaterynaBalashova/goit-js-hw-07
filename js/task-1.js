const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const items = category.querySelectorAll("ul li");
    console.log(`Category: ${title}`);
    console.log(`Elements: ${items.length}`);
    
});