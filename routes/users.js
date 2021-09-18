import express from 'express';
import updateUserInfoSchema from '../schemas/users.js';
import { getUserInfo, updateUserInfo } from '../controllers/users.js';
import { common } from '../utils/constants.js';

const userRouter = express.Router();

userRouter.get(common.pathMe, getUserInfo);
userRouter.patch(common.pathMe, updateUserInfoSchema, updateUserInfo);

export default userRouter;
