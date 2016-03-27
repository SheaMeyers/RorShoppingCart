class WelcomeController < ApplicationController
  def index
  	@products = Product.all
  	@users = User.where(email: 'test@email.com')
  	orders = Order.where(email: 'test@email.com')
  	@product_orders = []
  	orders.each do |order| 
  		@product_orders = @product_orders + Product.where(title: order.product_id).to_a
  	end
  	@product_total = 0.00
  	@product_orders.each do |product_order|
  		@product_total = @product_total + product_order.price.to_f
	end
  end
end
