import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserSpendingCategoryUseCase } from "./CreateUserSpendingCategoryUseCase";

class CreateUserSpendingCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.user;
        const { category_id } = request.body;

        const createUserSpendingCategoryUseCase = container.resolve(
            CreateUserSpendingCategoryUseCase
        );

        await createUserSpendingCategoryUseCase.execute({
            FK_SpendingCategory_IdCategory: category_id,
            FK_User_IdUser: id,
        });

        return response.send();
    }
}

export { CreateUserSpendingCategoryController };
