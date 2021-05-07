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

ActiveRecord::Schema.define(version: 2021_05_07_213344) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "galleries", force: :cascade do |t|
    t.integer "number_of_frames"
    t.string "wall_color"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "gallery_images", force: :cascade do |t|
    t.string "frame_color"
    t.integer "position"
    t.bigint "gallery_id", null: false
    t.bigint "image_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["gallery_id"], name: "index_gallery_images_on_gallery_id"
    t.index ["image_id"], name: "index_gallery_images_on_image_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "gallery_images", "galleries"
  add_foreign_key "gallery_images", "images"
end
