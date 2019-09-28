class CreateIncitingIncidents < ActiveRecord::Migration[5.2]
  def change
    create_table :inciting_incidents do |t|
      t.text :description

      t.timestamps
    end
  end
end
