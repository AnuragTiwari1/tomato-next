const recipes = require("../__mock_data/recipes.json");

export class Recipes {
  getPopularRecipes() {
    return recipes.recipes.filter((r) => r.popular);
  }
}
