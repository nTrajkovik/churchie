const config = require('./config');
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  comments() {
    return this.hasMany(Comment);
  },
});

const Url = bookshelf.Model.extend({
  tableName: 'urls',
  hasTimestamps: true,
  passages() {
    return this.hasMany(Passage);
  },
});

const Passage = bookshelf.Model.extend({
  tableName: 'passages',
  hasTimestamps: true,
  url() {
    return this.belongsTo(Url);
  },
  comments() {
    return this.hasMany(Comment);
  },
});

const Comment = bookshelf.Model.extend({
  tableName: 'comments',
  hasTimestamps: true,
  passage() {
    return this.belongsTo(Passage);
  },
  user() {
    return this.belongsTo(User);
  },
});

module.exports = {
  User,
  Url,
  Passage,
  Comment,
};
