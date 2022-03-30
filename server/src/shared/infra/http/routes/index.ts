import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { budgetRoutes } from "./budget.routes";
import { spendingCategoryRoutes } from "./spendingCategory.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/budget", budgetRoutes);
router.use("/spendingCategory", spendingCategoryRoutes);

export { router };
