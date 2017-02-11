const config = require('./config');
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);

bookshelf.knex.schema.hasTable('users').then((exists) => {
  if (!exists) {
    bookshelf.knex.schema.createTable('users', (user) => {
      user.increments('id').primary();
      user.text('name');
      user.text('chromeId');  //hashed
      user.boolean('expert');
      user.timestamps();
    }).then((table) => {
      console.log('Created Table', table);
    });
  }
});

bookshelf.knex.schema.hasTable('urls').then((exists) => {
  if (!exists) {
    bookshelf.knex.schema.createTable('urls', (url) => {
      url.increments('id').primary();
      url.text('path');
      url.timestamps();
    }).then((table) => {
      console.log('Created Table', table);
    });
  }
});

bookshelf.knex.schema.hasTable('passages').then((exists) => {
  if (!exists) {
    bookshelf.knex.schema.createTable('passages', (passage) => {
      passage.increments('id').primary();
      passage.text('text');
      passage.timestamps();
      passage.integer('url_id').references('urls.id');
    }).then((table) => {
      console.log('Created Table', table);
    });
  }
});

bookshelf.knex.schema.hasTable('comments').then((exists) => {
  if (!exists) {
    bookshelf.knex.schema.createTable('comments', (comment) => {
      comment.increments('id').primary();
      comment.text('text');
      comment.timestamps();
      comment.integer('passage_id').references('passages.id');
      comment.integer('user_id').references('users.id');
    }).then((table) => {
      console.log('Created Table', table);
    });
  }
});
