set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";
CREATE TABLE "items" (
	"itemId" serial NOT NULL,
	"itemName" VARCHAR(255) NOT NULL,
	"itemPrice" integer NOT NULL,
	"itemQty" integer NOT NULL,
	"itemImage" VARCHAR(255) NOT NULL,
	CONSTRAINT "items_pk" PRIMARY KEY ("itemId")
) WITH (
  OIDS=FALSE
);
