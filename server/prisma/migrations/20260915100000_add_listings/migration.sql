CREATE TABLE "Listing" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "university" TEXT,
    "campus" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sellerId" INTEGER NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "Listing"
ADD CONSTRAINT "Listing_sellerId_fkey"
FOREIGN KEY ("sellerId")
REFERENCES "User"("id")
ON DELETE RESTRICT
ON UPDATE CASCADE;