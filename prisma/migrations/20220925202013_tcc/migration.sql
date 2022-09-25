-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "emailPhone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpfCnpj" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_emailPhone_key" ON "User"("emailPhone");
