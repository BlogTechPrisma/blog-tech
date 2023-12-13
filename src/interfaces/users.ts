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

export interface IUserById {
  id: string
}

export interface IUserLogin {
  id?: string
  email: string
  password: string
}
