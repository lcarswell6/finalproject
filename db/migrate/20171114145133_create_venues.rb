class CreateVenues < ActiveRecord::Migration[5.1]
  def change
    create_table :venues do |t|
      t.string :name
      t.string :address
      t.string :dress_type
      t.string :description
      t.integer :rating

      t.timestamps
    end
  end
end
