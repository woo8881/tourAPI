const sequelize = require("../../models").sequelize;

const { resolve } = require("path");
const {
    User,
    Sequelize: { Op },
  } = require("../../models");
const { guideAuth } = require("./userController");
  sequelize.query("SET NAMES UTF8");

  module.exports ={
     signUp : (body) =>{
          return new Promise((resolve)=>{
            User.findOrCreate({
                where:{
                    user_id:body.user_id
                },
                defaults:{
                    user_id:body.user_id,
                    user_email:body.user_email,
                    user_nickname:body.user_nickname,
                    user_profile_image_url:body.user_profile_image_url,
                    user_gender:body.user_gender,
                    user_guide_auth:0
                }
            }).then((result)=>{
                result[1] == 1 ? resolve(result) : resolve(false);
            })
          })
      },

      deleteUser:(deleteUser)=>{
          return new Promise((resolve)=>{
              User.destroy({
                  where:{
                    user_id: deleteUser
                  }
              }).then((result)=>{
                  console.log(deleteUser)
                  result === 1 ? resolve(true):resolve(false);
              })
          })
      },
      guideAuth:(body)=>{
          return new Promise((resolve)=>{
              User.update(
                  {
                    user_guide_auth:body.user_guide_auth
                  },
                  {
                      where:{
                        user_id:body.user_id
                      }
                  }
              ).then((result)=>{
                  console.log(result)
                result == 1 ? resolve(result) : resolve(false);
            })
          })
      }
  }