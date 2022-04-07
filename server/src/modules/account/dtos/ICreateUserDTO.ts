interface ICreateUserDTO {
    IdUsers?: string;
    Name: string;
    Email: string;
    Password: string;
    Avatar?: string;
    IsVip?: boolean;
    VipExpiresDate?: Date;
}

export { ICreateUserDTO };
