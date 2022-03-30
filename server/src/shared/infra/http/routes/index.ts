import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { budgetRoutes } from "./budget.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/budget", budgetRoutes);
export { router };
