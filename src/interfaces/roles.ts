export interface IRolesCreate {
  id?: string;
  name: string;
  articles_creation?: boolean;
  admin_privileges?: boolean;
}

export interface IRolesRetrieveId {
  id: string;
}

export interface IListRoles {
  roleId: string;
  roleName: string;
}
