CREATE TABLE IF NOT EXISTS "portfolio_project" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text,
	"order" integer NOT NULL,
	"preview_img" text,
	"github_url" text,
	"preview_url" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "portfolio_project_order_unique" UNIQUE("order")
);
