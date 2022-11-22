alter table "public"."accounts"
  add constraint "accounts_parent_account_id_fkey"
  foreign key ("parent_account_id")
  references "public"."accounts"
  ("id") on update cascade on delete restrict;
