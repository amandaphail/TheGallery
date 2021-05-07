class CreateGalleries < ActiveRecord::Migration[6.1]
  def change
    create_table :galleries do |t|
      t.int :number_of_frames
      t.string :wall_color

      t.timestamps
    end
  end
end
