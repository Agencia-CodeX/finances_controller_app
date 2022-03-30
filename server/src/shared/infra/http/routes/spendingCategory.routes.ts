import { Router } from "express";

import { ListSpendingCategoryController } from "../../../../modules/spendingCategory/useCases/ListSpendingCategoryController";

const spendingCategoryRoutes = Router();

const listSpendingCategoryController = new ListSpendingCategoryController();

spendingCategoryRoutes.get("/", listSpendingCategoryController.handle);

export { spendingCategoryRoutes };
