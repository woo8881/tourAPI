module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "users",
      {
        user_id: {
          primaryKey: true,
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
        user_email: {
            type: DataTypes.STRING(255),
             allowNull: false,
          },
        user_nickname: {
            type: DataTypes.STRING(255),
            allowNull: true,
          },
        user_profile_image_url: {
            type: DataTypes.STRING(255),
            allowNull: true,
          },
        user_gender: {
            type: DataTypes.STRING(255),
            allowNull: true,
          },
        user_guide_auth:{
          type: DataTypes.BOOLEAN,
          allowNull: true
        }

      },
      {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: false,
      }
    );
    
  };