import { ICreateBudgetDTO } from "../dtos/ICreateBudgetDTO";
import { Budget } from "../infra/typeorm/entities/budget";

interface IBudgetRepository {
    create(data: ICreateBudgetDTO): Promise<Budget>;
    findAndUpdate(IsActive: boolean): Promise<void>;
}

export { IBudgetRepository };
