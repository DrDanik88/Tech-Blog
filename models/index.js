const User = require("user");
const Post = require("post");
const Comment = require("comment");

//logic
//user has many posts
//post belong to one user
//user has many comments
//comment belong to one user
//post has many comments
//comment belong to one post

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

    Post.belongsTo(User, {
    foreignKey: 'user_id',
    });

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete:"CASCADE",
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

    Comment.belongsTo(User, {
    foreignKey: 'post_id',
    });

module.exports = { User, Post, Comment };