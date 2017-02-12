const { User, Url, Annotation, Comment } = require('../db/schema');

module.exports = {
  startUp: ({ name, googleId }) => (
    User.findOrCreate({
      where: { name, googleId },
    })
  ),

  getAnnotations: ({ path }) => (
    Url.find({
      where: { path },
    })
    .then(({ id }) => (
       Annotation.findAll({
         where: { urlId: id },
         include: [{
           model: Comment,
           include: [User],
         }],
       })
    ))
  ),

  getComments: ({ annotationId }) => (
    Comment.findAll({
      where: { annotationId },
      include: [User],
    })
  ),

  postComment: ({ googleId, path, annotation, annotationId, comment }) => (
    User.find({
      where: { googleId },
    })
    .then(user => (
      Url.findOrCreate({
        where: { path },
      })
      .then(url => (
        Annotation.findOrCreate({
          where: { urlId: url.id, text: annotation },
        })
        .then(({ id }) => (
          Comment.create({
            text: comment,
            userId: user.id,
            annotationId: id,
          })
        ))
      ))
    ))
  ),
};
