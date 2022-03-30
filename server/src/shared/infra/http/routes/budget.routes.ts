import { Router } from "express";

import { CreateBudgetController } from "../../../../modules/budget/useCases/createBudget/CreateBudgetController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const budgetRoutes = Router();
const createBudgetController = new CreateBudgetController();

budgetRoutes.post("/", ensureAuthenticated, createBudgetController.handle);

export { budgetRoutes };
