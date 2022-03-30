import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBudgetUseCase } from "./CreateBudgetUseCase";

class CreateBudgetController {
    async handle(request: Request, response: Response) {
        const { Budget, Period } = request.body;
        const { id } = request.user;

        const createBudgetUseCase = container.resolve(CreateBudgetUseCase);

        const budget = await createBudgetUseCase.execute({
            Budget,
            Period,
            FK_User_IdUser: id,
        });

        return response.status(201).json(budget);
    }
}

export { CreateBudgetController };
