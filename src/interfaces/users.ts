export interface IUserCreate {
  id?: string;
  email: string;
  fullName: string;
  username: string;
  password: string;
}

export interface IUserUpdate {
  id: string;
  fullName: string;
  password: string;
}
