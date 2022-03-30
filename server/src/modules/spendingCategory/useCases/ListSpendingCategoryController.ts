import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpendingCategoryUseCase } from "./ListSpendingCategoryUseCase";

class ListSpendingCategoryController {
    async handle(request: Request, response: Response) {
        const listSpendingCategoryUseCase = container.resolve(
            ListSpendingCategoryUseCase
        );

        const spendingCategories = await listSpendingCategoryUseCase.execute();

        return response.json(spendingCategories);
    }
}

export { ListSpendingCategoryController };
