-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "rolesId" UUID;

-- CreateTable
CREATE TABLE "Roles" (
    "id" UUID NOT NULL,
    "usersId" UUID,
    "name" TEXT NOT NULL,
    "articles_creation" BOOLEAN NOT NULL DEFAULT false,
    "admin_privileges" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Roles_id_key" ON "Roles"("id");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "Roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
