const userService = require("./userService");


module.exports={
signUp : (req, res) =>{
    const body = req.body;
    // const kakaoUser = JSON.parse(result).kakao_account;
    userService.signUp(body).then((result)=>{
        let obj = {};
        if (result == false){
            obj["suc"] = false;
            obj["err"] = "중복"
            res.send(obj);
        }else if(result == "error"){
            obj["err"] = "에러";
            res.send(obj);
        }
        else{
            res.send(result)
        }
    })
},

deleteUser: (req, res) => {
    const deleteUser = req.params.user_id;
    userService.deleteUser(deleteUser).then((result)=>{
        res.send(result)
    })
},

guideAuth:(req, res) =>{
    const body = req.body;
    userService.guideAuth(body).then((result)=>{
        res.send(result)
    })
},

}