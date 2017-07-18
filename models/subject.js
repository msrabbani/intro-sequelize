'use strict';
module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  });

  Subject.associate = (models) => {
    Subject.hasMany(models.Teacher)
      // Subjects.belongsToMany(models.Student, {through: 'Su'})
  }

  return Subject;
};
