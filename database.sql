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
	"image_url" VARCHAR(255) NOT NULL,
	"energy_points" INT
);

CREATE TABLE "enemies" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100),
	"image" VARCHAR(255),
	"hit_points" INT,
	"attack_damage" INT,
	"damage_resistance" VARCHAR(100)
);

CREATE TABLE "items" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100),
	"image_url" VARCHAR(255),
	"description" VARCHAR(255),
	"attack_damage" INT,
	"damage_type" VARCHAR(100),
	"energy_cost" INT,
	"in_backpack" BOOLEAN DEFAULT 'false'
);

CREATE TABLE "user_characters" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"image_url" VARCHAR(255) NOT NULL,
	"energy_points" INT,
	"user_id" INT REFERENCES "user"
);
