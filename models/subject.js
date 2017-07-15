'use strict';
module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Subjects.associate = (models) => {
          Subjects.hasMany(models.Teachers)
        }
      }
    }
  });
  return Subject;
};
