# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  create_table "budgets", primary_key: "budget_id", id: :integer, charset: "utf8mb4", force: :cascade do |t|
    t.integer "userid"
    t.integer "categoryid"
    t.date "budget_month"
    t.integer "budget"
    t.index ["categoryid"], name: "categoryid"
    t.index ["userid"], name: "userid"
  end

  create_table "categories", primary_key: "categoryid", id: :integer, charset: "utf8mb4", force: :cascade do |t|
    t.string "categoryname", null: false
  end

  create_table "transactions", id: :integer, charset: "utf8mb4", force: :cascade do |t|
    t.integer "userid"
    t.string "itemname"
    t.integer "categoryid"
    t.date "date"
    t.integer "expense"
    t.index ["categoryid"], name: "categoryid"
    t.index ["userid"], name: "userid"
  end

  create_table "users", primary_key: "userid", id: :integer, charset: "utf8mb4", force: :cascade do |t|
    t.string "username", null: false
    t.string "password", null: false
  end

  add_foreign_key "budgets", "categories", column: "categoryid", primary_key: "categoryid", name: "budgets_ibfk_2"
  add_foreign_key "budgets", "users", column: "userid", primary_key: "userid", name: "budgets_ibfk_1"
  add_foreign_key "transactions", "categories", column: "categoryid", primary_key: "categoryid", name: "transactions_ibfk_2"
  add_foreign_key "transactions", "users", column: "userid", primary_key: "userid", name: "transactions_ibfk_1"
end
