interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  period?: string;
  avatar?: string;
}

export { ICreateUserDTO };
