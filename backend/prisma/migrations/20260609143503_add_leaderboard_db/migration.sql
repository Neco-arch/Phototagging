-- CreateTable
CREATE TABLE "leaderboard" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "leaderboard_pkey" PRIMARY KEY ("id")
);
