export interface IRoles {
  id?: string;
  name: string;
  articles_creation?: boolean;
  admin_privileges?: boolean;
}

export interface IRolesById {
  id: string;
}

export interface IRolesList {
  roleId: string;
  roleName: string;
}
