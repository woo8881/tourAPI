const express = require('express');
const router = express.Router();
const userController = require('./userController');
//회원가입
router.post('/signUp',userController.signUp);
//회원 탈퇴
router.get('/deleteUser/:user_id',userController.deleteUser);
//가이드 인증
router.post('/guideAuth',userController.guideAuth);
module.exports = router;