import { ICreateBudgetDTO } from "../dtos/ICreateBudgetDTO";
import { Budget } from "../infra/typeorm/entities/budget";

interface IBudgetRepository {
    create(data: ICreateBudgetDTO): Promise<Budget>;
    findAndUpdateTrue(IsActive: boolean): Promise<void>;
    findAndUpdateFalse(IsActive: boolean): Promise<void>;
    findByUserId(FK_User_IdUser: string): Promise<Budget[]>;
}

export { IBudgetRepository };
