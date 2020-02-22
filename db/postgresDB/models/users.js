module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(150),
      allowNull: true,
    }
  },
    {
      timestamps: true,
    },
  );
  return user;
};
