const { User } = require('../models');

const userData =
    [
        {
            "username": "ryker",
            "password": "ryker1234"
        },
        {
            "username": "leobigboy",
            "password": "leo1234"
        },
        {
            "username": "ezra",
            "password": "ezra1234"
        }
    ];

const seedAllUsers = async () => {
    for (const user of userData) {
        await User.create(user);
    }
}

module.exports = seedAllUsers;