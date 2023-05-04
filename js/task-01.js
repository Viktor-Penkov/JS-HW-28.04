const TotalCategory =document.querySelectorAll(`.item`)
console.log(TotalCategory);
console.log(`У списку ${TotalCategory.length} категорї`);



const message = document.querySelectorAll("li");

const textLi =[...message]

.map(categories => categories.textContent)
console.log(textLi);





const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);