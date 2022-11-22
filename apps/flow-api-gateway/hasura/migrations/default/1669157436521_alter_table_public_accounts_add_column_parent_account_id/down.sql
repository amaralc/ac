-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."accounts" add column "parent_account_id" uuid
--  null;

-- manually added:
alter table "public"."accounts" drop column "parent_account_id";

