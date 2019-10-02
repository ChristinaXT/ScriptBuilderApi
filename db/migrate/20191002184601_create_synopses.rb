class CreateSynopses < ActiveRecord::Migration[5.2]
  def change
    create_table :synopses do |t|
      t.text :description
    end
  end
end
