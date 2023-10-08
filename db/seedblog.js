const { Post } = require('../models');

const postData =
    [
        {
            "title": "Why MVC is so important",
            "content": "Cool new post content",
            "user_id": "1",
        },
        {
            "title": "Authentication vs. Authorization",
            "content": "You need auth tu have auth lol",
            "user_id": "2",
        },
        {
            "title": "Object-Relational Mapping",
            "content": "ORM sounds like a small animal",
            "user_id": "3",
        }
    ];

const seedAllPosts = () => Post.bulkCreate(postData);

module.exports = seedAllPosts;