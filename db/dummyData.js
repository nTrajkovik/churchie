const { User, Url, Annotation, Comment } = require('./schema');

User.create({
  name: 'Ian Stinson',
  googleId: 'iuwehpg8714y30g2bhf',
  expert: true,
})
.then((user) => {
  console.log(`Created user: ${user.id}`);
  User.create({
    name: 'Eric Churchill',
    googleId: '182uy4-98ty3uhgoi1h',
    expert: false,
  })
  .then((user) => {
    console.log(`Created user: ${user.id}`);
    User.create({
      name: 'Zak Golding',
      googleId: '8y24tughpuhnln',
      // expert: false,
    })
    .then((user) => {
      console.log(`Created user: ${user.id}`);
      Url.create({
        path: 'www.google.com'
      })
      .then((url) => {
        console.log('created url');
        Annotation.create({
          text: 'sample passage text',
          urlId: 1,
        })
        .then((passage) => {
          console.log('created annotation');
          Comment.create({
            // upVotes: 0,
            // downVotes: 0,
            text: 'sample comment',
            annotationId: 1,
            userId: 1,
          })
          .then((comment) => {
            console.log('Created comment ', comment);
          });
        });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
    })
    .catch((err) => {
      console.log(`Error creating user: ${err}`);
    });
  })
  .catch((err) => {
    console.log(`Error creating user: ${err}`);
  });
})
.catch((err) => {
  console.log(`Error creating user: ${err}`);
});
