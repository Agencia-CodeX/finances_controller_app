import { Router } from "express";

import { CreateUserSpendingCategoryController } from "../../../../modules/userSpendingCategory/useCases/createUserSpendingCategory/CreateUserSpendingCategoryController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const userSpendingCategoryRoutes = Router();

const createUserSpendingCategoryController =
    new CreateUserSpendingCategoryController();

userSpendingCategoryRoutes.post(
    "/",
    ensureAuthenticated,
    createUserSpendingCategoryController.handle
);

export { userSpendingCategoryRoutes };
