import { Router } from "express";

import { CreateSpendingCategoriesController } from "../../../../modules/spendingCategory/useCases/createSpendingCategory/CreateSpendingCategoriesController";
import { ListSpendingCategoryController } from "../../../../modules/spendingCategory/useCases/listSpendingCategories/ListSpendingCategoryController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const spendingCategoryRoutes = Router();

const listSpendingCategoryController = new ListSpendingCategoryController();
const createSpendingCategoryController =
    new CreateSpendingCategoriesController();
spendingCategoryRoutes.get("/", listSpendingCategoryController.handle);
spendingCategoryRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    createSpendingCategoryController.handle
);

export { spendingCategoryRoutes };
