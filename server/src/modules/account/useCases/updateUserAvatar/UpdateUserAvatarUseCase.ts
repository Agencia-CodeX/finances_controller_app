import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/App.Error";
import { deleteFile } from "../../../../utils/file";
import { IUsersRepository } from "../../repository/IUsersRepository";

interface IRequest {
    user_id: string;
    avatarFile: string;
}

@injectable()
class UpdateUserAvatarUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({ avatarFile, user_id }: IRequest) {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("Users not found!");
        }

        if (user.Avatar) {
            await deleteFile(`./tmp/avatar/${user.Avatar}`);
        }

        user.Avatar = avatarFile;

        await this.usersRepository.create(user);
    }
}

export { UpdateUserAvatarUseCase };
