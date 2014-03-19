# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140318193540) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "portfolios", force: true do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "projects", force: true do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "portfolio_id"
    t.datetime "short_term_impact_time_date"
    t.datetime "middle_impact_time_frame_date"
    t.datetime "expected_end_date"
  end

  create_table "risk_control_categories", force: true do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "risk_statuses", force: true do |t|
    t.integer  "project_id"
    t.string   "name"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "risk_types", force: true do |t|
    t.integer  "project_id"
    t.string   "name"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "risks", force: true do |t|
    t.string   "name"
    t.string   "description"
    t.integer  "impact_rating"
    t.datetime "early_impact_date"
    t.datetime "late_impact_date"
    t.boolean  "critical"
    t.integer  "probability"
    t.integer  "schedule_impact"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "project_id"
  end

end
