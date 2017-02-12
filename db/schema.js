const Sequelize = require('sequelize');
const db = require('./config');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.TEXT,
  googleId: Sequelize.TEXT,
  expert: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
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
  upVotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  downVotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

Annotation.belongsTo(Url, { foreignKey: 'urlId' });
Url.hasMany(Annotation, { foreignKey: 'urlId' });

Comment.belongsTo(Annotation, { foreignKey: 'annotationId' });
Annotation.hasMany(Comment, { foreignKey: 'annotationId' });

Comment.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Comment, { foreignKey: 'userId' });

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
