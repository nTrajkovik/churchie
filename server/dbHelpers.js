const { User, Url, Annotation, Comment } = require('../db/schema');

module.exports = {
  startUp: ({ name, googleId }) => (
    User.findOrCreate({
      where: {
        name,
        googleId,
      },
    })
    .then(user => user)
    .catch(err => `Error starting up: ${err}`)
  ),

  getAnnotations: ({ path }) => (
    Url.find({
      where: { path },
    })
    .then(({ id }) => (
       Annotation.findAll({
         where: { path_id: id },
         include: [{
           model: Comment,
           include: [User],
         }],
       })
    )
    .then(annotations => annotations)
    .catch(err => `Error getting annotations: ${err}`)
  ),

  getComments: ({ annotationId }) => {

  },
  postNewUrl: ({ googleId, path, annotation, comment }) => {

  },
  postNewAnnotation: ({ googleId, annotation, comment, pathId }) => {

  },
  postComment: ({ googleId, comment, annotationId }) => {

  },
};
