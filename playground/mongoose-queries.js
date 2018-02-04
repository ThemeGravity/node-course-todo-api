const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// const id = '5a7635796f0ba735f88430e711';
const id = '5a6db24ea01eb3211ceff9e5';

if (!ObjectID.isValid(id)) {
    console.log("ID is not valid");
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }

    console.log('User', user);
}).catch((e) => console.log(e));