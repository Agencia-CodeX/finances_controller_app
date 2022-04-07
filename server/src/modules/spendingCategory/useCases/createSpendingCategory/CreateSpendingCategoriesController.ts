import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpendingCategoriesUseCase } from "./CreateSpendingCategoriesUseCase";

class CreateSpendingCategoriesController {
    async handle(request: Request, response: Response) {
        const { Description, Icon, Name } = request.body;

        const createSpendingCategoriesUseCase = container.resolve(
            CreateSpendingCategoriesUseCase
        );

        await createSpendingCategoriesUseCase.execute({
            Description,
            Icon,
            Name,
        });

        return response.status(201).send();
    }
}

export { CreateSpendingCategoriesController };
