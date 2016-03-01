class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :order_id
      t.string :email
      t.string :product_id
      t.datetime :date
      t.integer :quantity
      t.string :state

      t.timestamps null: false
    end
  end
end
