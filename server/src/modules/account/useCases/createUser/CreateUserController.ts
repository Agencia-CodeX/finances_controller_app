import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { Email, Name, Password } = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);

        const user = await createUserUseCase.execute({
            Email,
            Name,
            Password,
        });

        return response.status(201).json(user);
    }
}

export { CreateUserController };
