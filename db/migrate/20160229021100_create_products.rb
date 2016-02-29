class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :id
      t.string :title
      t.currency :price
      t.string :producer

      t.timestamps null: false
    end
  end
end
