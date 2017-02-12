const config = require('./config');
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  comments: function() {
    return this.hasMany(Comment);
  },
});

const Url = bookshelf.Model.extend({
  tableName: 'urls',
  hasTimestamps: true,
  passages: function() {
    return this.hasMany(Passage);
  },
});

const Passage = bookshelf.Model.extend({
  tableName: 'passages',
  hasTimestamps: true,
  url: function() {
    return this.belongsTo(Url);
  },
  comments: function() {
    return this.hasMany(Comment);
  },
});

const Comment = bookshelf.Model.extend({
  tableName: 'comments',
  hasTimestamps: true,
  passage: function() {
    return this.belongsTo(Passage);
  },
  user: function() {
    return this.belongsTo(User);
  },
});

module.exports = {
  User,
  Url,
  Passage,
  Comment,
};
