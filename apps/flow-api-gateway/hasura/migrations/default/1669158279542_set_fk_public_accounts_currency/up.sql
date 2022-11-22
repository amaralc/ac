alter table "public"."accounts"
  add constraint "accounts_currency_fkey"
  foreign key ("currency")
  references "public"."currencies"
  ("abbreviation") on update cascade on delete restrict;
