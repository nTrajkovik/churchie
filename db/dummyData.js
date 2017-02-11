const User = require('./models').User;

User.forge({
  name: 'Ian Stinson',
  chromeId: 'iuwehpg8714y30g2bhf',
  expert: true,
})
.save()
.then((user) => {
  console.log(`Created user: ${user.id}`);
})
.catch((err) => {
  console.log(`Error creating user: ${err}`);
});

User.forge({
  name: 'Eric Churchill',
  chromeId: '182uy4-98ty3uhgoi1h',
  expert: false,
})
.save()
.then((user) => {
  console.log(`Created user: ${user.id}`);
})
.catch((err) => {
  console.log(`Error creating user: ${err}`);
});

User.forge({
  name: 'Zak Golding',
  chromeId: '8y24tughpuhnln',
  expert: false,
})
.save()
.then((user) => {
  console.log(`Created user: ${user.id}`);
})
.catch((err) => {
  console.log(`Error creating user: ${err}`);
});
