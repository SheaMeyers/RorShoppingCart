class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :product_id
      t.string :title
      t.string :price
      t.string :producer

      t.timestamps null: false
    end
  end
end
