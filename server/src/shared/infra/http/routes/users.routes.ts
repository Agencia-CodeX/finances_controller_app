import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";
import { CreateUserController } from "../../../../modules/account/useCases/createUser/CreateUserController";
import { GetUserInfoController } from "../../../../modules/account/useCases/getUserInfo/GetUserInfoController";
import { UpdateUserAvatarController } from "../../../../modules/account/useCases/updateUserAvatar/UpdateUserAvatarController";
import { UserIsVipController } from "../../../../modules/account/useCases/userIsVip/UserIsVipController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const userIsVipController = new UserIsVipController();
const getUserInfoController = new GetUserInfoController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
    "/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
);

usersRoutes.patch("/vip", ensureAuthenticated, userIsVipController.handle);

usersRoutes.get("/info", ensureAuthenticated, getUserInfoController.handle);

export { usersRoutes };
