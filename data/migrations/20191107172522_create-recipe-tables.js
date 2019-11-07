
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 250)
        .unique()
        .notNullable();
  })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('stepNumber')
            .unsigned()
            .notNullable();
        tbl.text('instructions');
        tbl.integer('recipeId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 250)
            .notNullable()
            .unique();
    })
    .createTable('quantities', tbl => {
        tbl.increments();
        tbl.string('unit', 250)
            .notNullable();
        tbl.float('quantity', 2)
            .notNullable();
        tbl.integer('recipeId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        tbl.integer('ingredientId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        tbl.unique(['recipeId', 'ingredientId']);
    });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('quantities')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('recipes')
};
