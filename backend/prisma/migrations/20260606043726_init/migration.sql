-- CreateTable
CREATE TABLE "Map" (
    "id" SERIAL NOT NULL,
    "map_name" TEXT NOT NULL,

    CONSTRAINT "Map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coordinate" (
    "id" SERIAL NOT NULL,
    "character" TEXT NOT NULL,
    "posx" INTEGER NOT NULL,
    "posy" INTEGER NOT NULL,
    "map_id" INTEGER NOT NULL,

    CONSTRAINT "Coordinate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Coordinate" ADD CONSTRAINT "Coordinate_map_id_fkey" FOREIGN KEY ("map_id") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
