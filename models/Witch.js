const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Witch model
class Witch extends Model {}

//define table cloumns and configuration
Witch.init(
  {
    //Id column
   id:  {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    // Username Column
    witch_alias: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // Password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // password must be at least four characters long
        len: [4]
      }
    }
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE

     // pass in our imported sequelize connection (the direct connection to our database)
     sequelize,
     // don't automatically create createdAt/updatedAt timestamp fields
     timestamps: false,
     // don't pluralize name of database table
     freezeTableName: true,
     // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
     underscored: true,
     // make it so our model name stays lowercase in the database
     modelName: 'witch'
  }
);

module.exports = Witch;