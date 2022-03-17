'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doc_Depart_Spec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Doc_Depart_Spec.init({
    doctorId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER,
    specialtyId: DataTypes.INTEGER,
   
  }, {
    sequelize,
    modelName: 'Doc_Depart_Spec',
  });
  return Doc_Depart_Spec;
};