const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db('users').select('id', 'username', 'department');
}

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      return findById(ids[0]);
    });
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}