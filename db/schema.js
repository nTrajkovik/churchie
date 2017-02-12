const Sequelize = require('sequelize');
const db = require('./config');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.TEXT,
  chromeId: Sequelize.TEXT,
  expert: Sequelize.BOOLEAN,
});

const Url = db.define('url', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  path: Sequelize.TEXT,
});

const Annotation = db.define('annotation', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: Sequelize.TEXT,
});

const Comment = db.define('comment', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: Sequelize.TEXT,
  upVotes: Sequelize.INTEGER,
  downVotes: Sequelize.INTEGER,
});

Annotation.belongsTo(Url, { foreignKey: 'url_id' });
Url.hasMany(Annotation, { foreignKey: 'url_id' });

Comment.belongsTo(Annotation, { foreignKey: 'passage_id' });
Annotation.hasMany(Comment, { foreignKey: 'passage_id' });

Comment.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Comment, { foreignKey: 'user_id' });

db.sync({ force: false })
.then(() => {
  console.log('Tables synced');
}).catch((err) => {
  console.log(`Failed to sync tables: ${err}`);
});

module.exports = {
  User,
  Url,
  Annotation,
  Comment,
};
