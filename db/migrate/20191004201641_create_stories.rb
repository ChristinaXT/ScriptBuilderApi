class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title
      t.text :notes
      t.string :epoch
      t.string :character
      t.text :inciting_incident
      t.text :setting
      t.text :synopsis
      t.integer :user_id
      t.text :character_history

    end
  end
end
