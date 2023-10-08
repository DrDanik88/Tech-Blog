const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define User model
const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Define BlogPost model
const BlogPost = sequelize.define('blogPost', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// Define Comment model
const Comment = sequelize.define('comment', {
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// Define associations between models
User.hasMany(BlogPost);
BlogPost.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

BlogPost.hasMany(Comment);
Comment.belongsTo(BlogPost);




// Export models
module.exports = {
    User,
    BlogPost,
    Comment
};
