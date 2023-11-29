export interface ICreateRole{
    name: string,
    articles_creation?: boolean, 
    admin_privileges?: boolean
}

export interface IListRoles{
    roleId: string;
    roleName: string;
}