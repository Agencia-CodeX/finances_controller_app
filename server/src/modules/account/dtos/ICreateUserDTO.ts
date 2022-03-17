interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  senha: string;
  periodo?: string;
  avatar?: string;
}

export { ICreateUserDTO };
