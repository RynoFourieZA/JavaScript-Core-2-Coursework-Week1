/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- Title (a string), 
- Servings (a number), and 
- Ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

You should write and log at least 5 recipes

**/

let recipes = [
  {
    title: "Cheese and Macaroni",
    serves: 10,
    ingredients: [
      "cheddar cheese",
      "macaroni",
      "milk",
      "flour",
      "butter",
      "paprika",
    ],
  },
  {
    title: "Ham, cheese & potato pie",
    serves: 4,
    ingredients: [
      "ham", 
      "cheese", 
      "potato", 
      "flour", 
      "butter", 
      "green salad"],
  },
  {
    title: "Bombay chilli cheese toastie",
    serves: 2,
    ingredients: [
      "peppers",
      "spices",
      "potato",
      "cheese",
      "green chutney"],
  },
  {
    title: "Giant cheese-stuffed Mexican meatballs",
    serves: 8,
    ingredients: [
      "Dark chocolate",
      "dried ancho chillies",
      "meatball",
      "coriander salad",
      "cheese"],
  },
  {
    title: "Italian flatbread with pear, walnut and gorgonzola",
    serves: 4,
    ingredients: [
      "gorgonzola",
      "pears",
      "walnuts",
      "bread",
      "molten cheesy"],
  },
];

recipes.forEach(recipe =>{ 
  console.log(recipe.title);
  console.log(`Serves: ${recipe.serves}`);
  console.log(`Ingredients: \r\n${recipe.ingredients.join('\r\n')}`);
});