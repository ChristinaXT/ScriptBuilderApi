class CreateEpoches < ActiveRecord::Migration[5.2]
  def change
    create_table :epoches do |t|
      t.text :description
    end
  end
end
