interface ICreateUserTokenDTO {
    FK_User_IdUser: string;
    Expires_date: Date;
    Refresh_token: string;
}

export { ICreateUserTokenDTO };
