import { MigrateDownArgs, MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "location_blocks_section_carousel_slides" CASCADE;
  DROP TABLE "location_blocks_section_carousel" CASCADE;
  DROP TABLE "location_blocks_section_media" CASCADE;
  DROP TABLE "location_blocks_section_01_block" CASCADE;
  DROP TABLE "location_blocks_section_02_block" CASCADE;
  DROP TABLE "location_blocks_section_03_block" CASCADE;
  DROP TABLE "location_blocks_section_04_block" CASCADE;
  DROP TABLE "location_blocks_section_05_block" CASCADE;
  DROP TABLE "location_blocks_section_06_block" CASCADE;
  DROP TABLE "location_blocks_section_07_block" CASCADE;
  DROP TABLE "location_blocks_section_08_block" CASCADE;
  DROP TABLE "location_blocks_section_09_block" CASCADE;
  DROP TABLE "location_blocks_section_10_block" CASCADE;
  DROP TABLE "location_blocks_section_11_block_slides" CASCADE;
  DROP TABLE "location_blocks_section_11_block" CASCADE;
  DROP TABLE "location_blocks_section_12_block" CASCADE;
  DROP TABLE "location_blocks_section_13_block_panels_items" CASCADE;
  DROP TABLE "location_blocks_section_13_block_panels" CASCADE;
  DROP TABLE "location_blocks_section_13_block" CASCADE;
  DROP TABLE "location_blocks_section_14_block_slides" CASCADE;
  DROP TABLE "location_blocks_section_14_block" CASCADE;
  DROP TABLE "location_blocks_section_15_block_slides" CASCADE;
  DROP TABLE "location_blocks_section_15_block" CASCADE;
  DROP TABLE "location_blocks_section_16_block" CASCADE;
  DROP TABLE "location_blocks_section_17_block_milestones" CASCADE;
  DROP TABLE "location_blocks_section_17_block" CASCADE;
  DROP TABLE "location_blocks_section_18_block_panels_slides" CASCADE;
  DROP TABLE "location_blocks_section_18_block_panels" CASCADE;
  DROP TABLE "location_blocks_section_18_block" CASCADE;
  DROP TABLE "location_blocks_section_19_block" CASCADE;
  DROP TABLE "location_blocks_section_20_block" CASCADE;
  DROP TABLE "location_blocks_section_21_block" CASCADE;
  DROP TABLE "location_blocks_section_22_block" CASCADE;
  DROP TABLE "location_blocks_section_23_block" CASCADE;
  DROP TABLE "location_blocks_section_24_block_slides" CASCADE;
  DROP TABLE "location_blocks_section_24_block" CASCADE;
  DROP TABLE "location_blocks_section_separator_block" CASCADE;
  DROP TABLE "location_blocks_full_screen_block" CASCADE;
  DROP TABLE "location_blocks_carousel_block_slides" CASCADE;
  DROP TABLE "location_blocks_carousel_block" CASCADE;
  DROP TABLE "location_blocks_questions_block_questions" CASCADE;
  DROP TABLE "location_blocks_questions_block" CASCADE;
  DROP TABLE "location_blocks_testimonial_block_testimonials" CASCADE;
  DROP TABLE "location_blocks_testimonial_block" CASCADE;
  DROP TABLE "location_blocks_highlights_highlights" CASCADE;
  DROP TABLE "location_blocks_highlights" CASCADE;
  DROP TABLE "location_blocks_section_carousel_with_thumbnail_slides" CASCADE;
  DROP TABLE "location_blocks_section_carousel_with_thumbnail" CASCADE;
  DROP TABLE "location_blocks_quote" CASCADE;
  DROP TABLE "location_blocks_property_block" CASCADE;
  DROP TABLE "location" CASCADE;
  DROP TABLE "location_rels" CASCADE;`);
}

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "location_blocks_section_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_01_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"subheading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_02_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_03_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_04_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_05_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_06_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_07_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_08_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_09_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_10_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_11_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_11_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_12_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_13_block_panels_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_13_block_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"link" varchar,
  	"title" varchar,
  	"next_to_title" varchar,
  	"byline" varchar,
  	"more_details" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_13_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_14_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_14_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_15_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_15_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_16_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_17_block_milestones" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" jsonb NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_17_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"link_text" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_18_block_panels_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_18_block_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar NOT NULL,
  	"starting_price" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"explore_link" varchar NOT NULL,
  	"booking_link" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_18_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_19_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_20_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_21_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_22_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_23_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_24_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_24_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_separator_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"is_full_width" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_full_screen_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_carousel_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_carousel_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_questions_block_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_questions_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_testimonial_block_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" varchar NOT NULL,
  	"author" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_testimonial_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_highlights_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"highlight" varchar NOT NULL,
  	"description" jsonb NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_carousel_with_thumbnail_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_carousel_with_thumbnail" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" jsonb,
  	"author" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_property_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"logo_id" integer NOT NULL,
  	"description" jsonb,
  	"features" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"marker_text" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "location_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"mux_video_id" integer
  );
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_carousel_slides" ADD CONSTRAINT "location_blocks_section_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_carousel"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_carousel" ADD CONSTRAINT "location_blocks_section_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_media" ADD CONSTRAINT "location_blocks_section_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_01_block" ADD CONSTRAINT "location_blocks_section_01_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_02_block" ADD CONSTRAINT "location_blocks_section_02_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_03_block" ADD CONSTRAINT "location_blocks_section_03_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_04_block" ADD CONSTRAINT "location_blocks_section_04_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_05_block" ADD CONSTRAINT "location_blocks_section_05_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_06_block" ADD CONSTRAINT "location_blocks_section_06_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_07_block" ADD CONSTRAINT "location_blocks_section_07_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_08_block" ADD CONSTRAINT "location_blocks_section_08_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_09_block" ADD CONSTRAINT "location_blocks_section_09_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_10_block" ADD CONSTRAINT "location_blocks_section_10_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_11_block_slides" ADD CONSTRAINT "location_blocks_section_11_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_11_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_11_block" ADD CONSTRAINT "location_blocks_section_11_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_12_block" ADD CONSTRAINT "location_blocks_section_12_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_13_block_panels_items" ADD CONSTRAINT "location_blocks_section_13_block_panels_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_13_block_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_13_block_panels" ADD CONSTRAINT "location_blocks_section_13_block_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_13_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_13_block" ADD CONSTRAINT "location_blocks_section_13_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_14_block_slides" ADD CONSTRAINT "location_blocks_section_14_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_14_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_14_block" ADD CONSTRAINT "location_blocks_section_14_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_15_block_slides" ADD CONSTRAINT "location_blocks_section_15_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_15_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_15_block" ADD CONSTRAINT "location_blocks_section_15_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_16_block" ADD CONSTRAINT "location_blocks_section_16_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_17_block_milestones" ADD CONSTRAINT "location_blocks_section_17_block_milestones_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_17_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_17_block" ADD CONSTRAINT "location_blocks_section_17_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_18_block_panels_slides" ADD CONSTRAINT "location_blocks_section_18_block_panels_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_18_block_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_18_block_panels" ADD CONSTRAINT "location_blocks_section_18_block_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_18_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_18_block" ADD CONSTRAINT "location_blocks_section_18_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_19_block" ADD CONSTRAINT "location_blocks_section_19_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_20_block" ADD CONSTRAINT "location_blocks_section_20_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_21_block" ADD CONSTRAINT "location_blocks_section_21_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_22_block" ADD CONSTRAINT "location_blocks_section_22_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_23_block" ADD CONSTRAINT "location_blocks_section_23_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_24_block_slides" ADD CONSTRAINT "location_blocks_section_24_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_24_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_24_block" ADD CONSTRAINT "location_blocks_section_24_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_separator_block" ADD CONSTRAINT "location_blocks_section_separator_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_full_screen_block" ADD CONSTRAINT "location_blocks_full_screen_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_carousel_block_slides" ADD CONSTRAINT "location_blocks_carousel_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_carousel_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_carousel_block" ADD CONSTRAINT "location_blocks_carousel_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_questions_block_questions" ADD CONSTRAINT "location_blocks_questions_block_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_questions_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_questions_block" ADD CONSTRAINT "location_blocks_questions_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_testimonial_block_testimonials" ADD CONSTRAINT "location_blocks_testimonial_block_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_testimonial_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_testimonial_block" ADD CONSTRAINT "location_blocks_testimonial_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_highlights_highlights" ADD CONSTRAINT "location_blocks_highlights_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_highlights"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_highlights" ADD CONSTRAINT "location_blocks_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_carousel_with_thumbnail_slides" ADD CONSTRAINT "location_blocks_section_carousel_with_thumbnail_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_carousel_with_thumbnail"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_carousel_with_thumbnail" ADD CONSTRAINT "location_blocks_section_carousel_with_thumbnail_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_quote" ADD CONSTRAINT "location_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_property_block" ADD CONSTRAINT "location_blocks_property_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_property_block" ADD CONSTRAINT "location_blocks_property_block_logo_id_images_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_property_block" ADD CONSTRAINT "location_blocks_property_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location" ADD CONSTRAINT "location_meta_image_id_images_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_rels" ADD CONSTRAINT "location_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_rels" ADD CONSTRAINT "location_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_rels" ADD CONSTRAINT "location_rels_mux_video_fk" FOREIGN KEY ("mux_video_id") REFERENCES "public"."mux_video"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_slides_order_idx" ON "location_blocks_section_carousel_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_slides_parent_id_idx" ON "location_blocks_section_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_order_idx" ON "location_blocks_section_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_parent_id_idx" ON "location_blocks_section_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_path_idx" ON "location_blocks_section_carousel" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_media_order_idx" ON "location_blocks_section_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_media_parent_id_idx" ON "location_blocks_section_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_media_path_idx" ON "location_blocks_section_media" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_01_block_order_idx" ON "location_blocks_section_01_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_01_block_parent_id_idx" ON "location_blocks_section_01_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_01_block_path_idx" ON "location_blocks_section_01_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_02_block_order_idx" ON "location_blocks_section_02_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_02_block_parent_id_idx" ON "location_blocks_section_02_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_02_block_path_idx" ON "location_blocks_section_02_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_03_block_order_idx" ON "location_blocks_section_03_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_03_block_parent_id_idx" ON "location_blocks_section_03_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_03_block_path_idx" ON "location_blocks_section_03_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_04_block_order_idx" ON "location_blocks_section_04_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_04_block_parent_id_idx" ON "location_blocks_section_04_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_04_block_path_idx" ON "location_blocks_section_04_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_05_block_order_idx" ON "location_blocks_section_05_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_05_block_parent_id_idx" ON "location_blocks_section_05_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_05_block_path_idx" ON "location_blocks_section_05_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_06_block_order_idx" ON "location_blocks_section_06_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_06_block_parent_id_idx" ON "location_blocks_section_06_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_06_block_path_idx" ON "location_blocks_section_06_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_07_block_order_idx" ON "location_blocks_section_07_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_07_block_parent_id_idx" ON "location_blocks_section_07_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_07_block_path_idx" ON "location_blocks_section_07_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_08_block_order_idx" ON "location_blocks_section_08_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_08_block_parent_id_idx" ON "location_blocks_section_08_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_08_block_path_idx" ON "location_blocks_section_08_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_09_block_order_idx" ON "location_blocks_section_09_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_09_block_parent_id_idx" ON "location_blocks_section_09_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_09_block_path_idx" ON "location_blocks_section_09_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_10_block_order_idx" ON "location_blocks_section_10_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_10_block_parent_id_idx" ON "location_blocks_section_10_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_10_block_path_idx" ON "location_blocks_section_10_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_11_block_slides_order_idx" ON "location_blocks_section_11_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_11_block_slides_parent_id_idx" ON "location_blocks_section_11_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_11_block_order_idx" ON "location_blocks_section_11_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_11_block_parent_id_idx" ON "location_blocks_section_11_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_11_block_path_idx" ON "location_blocks_section_11_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_12_block_order_idx" ON "location_blocks_section_12_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_12_block_parent_id_idx" ON "location_blocks_section_12_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_12_block_path_idx" ON "location_blocks_section_12_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_13_block_panels_items_order_idx" ON "location_blocks_section_13_block_panels_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_13_block_panels_items_parent_id_idx" ON "location_blocks_section_13_block_panels_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_13_block_panels_order_idx" ON "location_blocks_section_13_block_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_13_block_panels_parent_id_idx" ON "location_blocks_section_13_block_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_13_block_order_idx" ON "location_blocks_section_13_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_13_block_parent_id_idx" ON "location_blocks_section_13_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_13_block_path_idx" ON "location_blocks_section_13_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_14_block_slides_order_idx" ON "location_blocks_section_14_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_14_block_slides_parent_id_idx" ON "location_blocks_section_14_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_14_block_order_idx" ON "location_blocks_section_14_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_14_block_parent_id_idx" ON "location_blocks_section_14_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_14_block_path_idx" ON "location_blocks_section_14_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_15_block_slides_order_idx" ON "location_blocks_section_15_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_15_block_slides_parent_id_idx" ON "location_blocks_section_15_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_15_block_order_idx" ON "location_blocks_section_15_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_15_block_parent_id_idx" ON "location_blocks_section_15_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_15_block_path_idx" ON "location_blocks_section_15_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_16_block_order_idx" ON "location_blocks_section_16_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_16_block_parent_id_idx" ON "location_blocks_section_16_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_16_block_path_idx" ON "location_blocks_section_16_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_17_block_milestones_order_idx" ON "location_blocks_section_17_block_milestones" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_17_block_milestones_parent_id_idx" ON "location_blocks_section_17_block_milestones" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_17_block_order_idx" ON "location_blocks_section_17_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_17_block_parent_id_idx" ON "location_blocks_section_17_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_17_block_path_idx" ON "location_blocks_section_17_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_18_block_panels_slides_order_idx" ON "location_blocks_section_18_block_panels_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_18_block_panels_slides_parent_id_idx" ON "location_blocks_section_18_block_panels_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_18_block_panels_order_idx" ON "location_blocks_section_18_block_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_18_block_panels_parent_id_idx" ON "location_blocks_section_18_block_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_18_block_order_idx" ON "location_blocks_section_18_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_18_block_parent_id_idx" ON "location_blocks_section_18_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_18_block_path_idx" ON "location_blocks_section_18_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_19_block_order_idx" ON "location_blocks_section_19_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_19_block_parent_id_idx" ON "location_blocks_section_19_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_19_block_path_idx" ON "location_blocks_section_19_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_20_block_order_idx" ON "location_blocks_section_20_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_20_block_parent_id_idx" ON "location_blocks_section_20_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_20_block_path_idx" ON "location_blocks_section_20_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_21_block_order_idx" ON "location_blocks_section_21_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_21_block_parent_id_idx" ON "location_blocks_section_21_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_21_block_path_idx" ON "location_blocks_section_21_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_22_block_order_idx" ON "location_blocks_section_22_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_22_block_parent_id_idx" ON "location_blocks_section_22_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_22_block_path_idx" ON "location_blocks_section_22_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_23_block_order_idx" ON "location_blocks_section_23_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_23_block_parent_id_idx" ON "location_blocks_section_23_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_23_block_path_idx" ON "location_blocks_section_23_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_24_block_slides_order_idx" ON "location_blocks_section_24_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_24_block_slides_parent_id_idx" ON "location_blocks_section_24_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_24_block_order_idx" ON "location_blocks_section_24_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_24_block_parent_id_idx" ON "location_blocks_section_24_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_24_block_path_idx" ON "location_blocks_section_24_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_separator_block_order_idx" ON "location_blocks_section_separator_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_separator_block_parent_id_idx" ON "location_blocks_section_separator_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_separator_block_path_idx" ON "location_blocks_section_separator_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_full_screen_block_order_idx" ON "location_blocks_full_screen_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_full_screen_block_parent_id_idx" ON "location_blocks_full_screen_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_full_screen_block_path_idx" ON "location_blocks_full_screen_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_carousel_block_slides_order_idx" ON "location_blocks_carousel_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_carousel_block_slides_parent_id_idx" ON "location_blocks_carousel_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_carousel_block_order_idx" ON "location_blocks_carousel_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_carousel_block_parent_id_idx" ON "location_blocks_carousel_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_carousel_block_path_idx" ON "location_blocks_carousel_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_questions_block_questions_order_idx" ON "location_blocks_questions_block_questions" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_questions_block_questions_parent_id_idx" ON "location_blocks_questions_block_questions" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_questions_block_order_idx" ON "location_blocks_questions_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_questions_block_parent_id_idx" ON "location_blocks_questions_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_questions_block_path_idx" ON "location_blocks_questions_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_testimonial_block_testimonials_order_idx" ON "location_blocks_testimonial_block_testimonials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_testimonial_block_testimonials_parent_id_idx" ON "location_blocks_testimonial_block_testimonials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_testimonial_block_order_idx" ON "location_blocks_testimonial_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_testimonial_block_parent_id_idx" ON "location_blocks_testimonial_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_testimonial_block_path_idx" ON "location_blocks_testimonial_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_highlights_highlights_order_idx" ON "location_blocks_highlights_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_highlights_highlights_parent_id_idx" ON "location_blocks_highlights_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_highlights_order_idx" ON "location_blocks_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_highlights_parent_id_idx" ON "location_blocks_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_highlights_path_idx" ON "location_blocks_highlights" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_with_thumbnail_slides_order_idx" ON "location_blocks_section_carousel_with_thumbnail_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_with_thumbnail_slides_parent_id_idx" ON "location_blocks_section_carousel_with_thumbnail_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_with_thumbnail_order_idx" ON "location_blocks_section_carousel_with_thumbnail" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_with_thumbnail_parent_id_idx" ON "location_blocks_section_carousel_with_thumbnail" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_with_thumbnail_path_idx" ON "location_blocks_section_carousel_with_thumbnail" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_quote_order_idx" ON "location_blocks_quote" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_quote_parent_id_idx" ON "location_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_quote_path_idx" ON "location_blocks_quote" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_property_block_order_idx" ON "location_blocks_property_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_property_block_parent_id_idx" ON "location_blocks_property_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_property_block_path_idx" ON "location_blocks_property_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_property_block_image_idx" ON "location_blocks_property_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_property_block_logo_idx" ON "location_blocks_property_block" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "location_meta_meta_image_idx" ON "location" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "location_rels_order_idx" ON "location_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "location_rels_parent_idx" ON "location_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "location_rels_path_idx" ON "location_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "location_rels_images_id_idx" ON "location_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "location_rels_mux_video_id_idx" ON "location_rels" USING btree ("mux_video_id");`);
}
