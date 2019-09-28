class CreateGivenCircumstances < ActiveRecord::Migration[5.2]
  def change
    create_table :given_circumstances do |t|
      t.text :character_background
      t.integer :character_id

      t.timestamps
    end
  end
end
