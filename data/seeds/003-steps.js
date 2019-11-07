
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps").insert([
    { recipeId: 1, stepNumber: "1", instructions: "mix chicken with flour" },
    {
      recipeId: 1,
      stepNumber: "2",
      instructions: "deep fry the marinated chicken",
    },
    { recipeId: 2, stepNumber: "1", instructions: "boil noodle" },
    { recipeId: 2, stepNumber: "2", instructions: "melt cheese" },
    { recipeId: 2, stepNumber: "3", instructions: "mix noodle and cheese" },
    {
      recipeId: 3,
      stepNumber: "1",
      instructions: "drain tuna fish from can",
    },
    { 
      recipeId: 3, 
      stepNumber: "2", 
      instructions: "cut bell pepper",
    },
    {
      recipeId: 3,
      stepNumber: "3",
      instructions: "mix tuna fish with bell pepper",
    },
    {
      recipeId: 3,
      stepNumber: "4",
      instructions: "pan fry the mixture on both side",
    },
  ]);
};
