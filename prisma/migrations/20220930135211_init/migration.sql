-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "dates" INTEGER[],

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
