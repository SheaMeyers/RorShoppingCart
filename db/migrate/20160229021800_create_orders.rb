class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :email
      t.string :productId
      t.string :orderId
      t.datetime :date
      t.integer :quantity
      t.string :state

      t.timestamps null: false
    end
  end
end
