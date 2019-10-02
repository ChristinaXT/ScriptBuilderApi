class CreateGivenCircumstances < ActiveRecord::Migration[5.2]
  def change
    create_table :given_circumstances do |t|
      t.text :content
    end
  end
end
