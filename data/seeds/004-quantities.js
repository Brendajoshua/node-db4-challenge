
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("quantities").insert([
    { recipeId: 1, ingredientId: 1, quantity: 1, unit: "lbs" },
    { recipeId: 1, ingredientId: 6, quantity: 1, unit: "cup" },
    { recipeId: 2, ingredientId: 2, quantity: 2, unit: "cups" },
    { recipeId: 2, ingredientId: 3, quantity: 0.5, unit: "lbs" },
    { recipeId: 3, ingredientId: 4, quantity: 8, unit: "oz" },
    { recipeId: 3, ingredientId: 5, quantity: 4, unit: "oz" },
  ]);
};
