-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--CREATE DATABASE "adventure_game"

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR (80) UNIQUE NOT NULL,
  "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "characters" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"energy_points" INT NOT NULL,
	"image_url" VARCHAR(255) NOT NULL,
	"idle_class" VARCHAR(255) NOT NULL,
	"kick_class" VARCHAR(255) NOT NULL,
	"hurt_class" VARCHAR(255) NOT NULL,
	"walk_class" VARCHAR(255) NOT NULL,
	"run_class" VARCHAR(255) NOT NULL,
	"selected" BOOLEAN DEFAULT false
);

INSERT INTO "characters" ("name", "energy_points", "image_url", "idle_class", "kick_class", "hurt_class", "walk_class", "run_class")
VALUES
	('Blue Dino', '200', 'images/blue-dino-single-scaled.png', 'blueDinoIdle', 'blueDinoKick', 'blueDinoHurt', 'blueDinoWalk', 'blueDinoRun'),
	('Red Dino', '200', 'images/red-dino-single-scaled.png', 'redDinoIdle', 'redDinoKick', 'redDinoHurt', 'redDinoWalk', 'redDinoRun'),
	('Yellow Dino', '200', 'images/yellow-dino-single-scaled.png', 'yellowDinoIdle', 'yellowDinoKick', 'yellowDinoHurt', 'yellowDinoWalk', 'yellowDinoRun'),
	('Green Dino', '200', 'images/green-dino-single-scaled.png', 'greenDinoIdle', 'greenDinoKick', 'greenDinoHurt', 'greenDinoWalk', 'greenDinoRun')
;

CREATE TABLE "user_characters" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"energy_points" INT NOT NULL,
	"image_url" VARCHAR(255) NOT NULL,
	"idle_class" VARCHAR(255) NOT NULL,
	"kick_class" VARCHAR(255) NOT NULL,
	"hurt_class" VARCHAR(255) NOT NULL,
	"walk_class" VARCHAR(255) NOT NULL,
	"run_class" VARCHAR(255) NOT NULL,
	"selected" BOOLEAN DEFAULT false,
	"user_id" INT REFERENCES "user"
);

CREATE TABLE "backpack" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"image_url" VARCHAR(255) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	"attack_damage" INT NOT NULL,
	"energy_cost" INT NOT NULL
);

INSERT INTO "backpack" (
	"name",
	"image_url",
	"description",
	"attack_damage",
	"energy_cost"
)
	VALUES
	('Dino Kick', 'images/dinosaur-footprint-circle.png', 'Kick baddies', '30', '1')
;
