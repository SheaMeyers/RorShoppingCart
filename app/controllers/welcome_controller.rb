class WelcomeController < ApplicationController
  def index
  	@products = Product.all
  	@users = User.where(email: 'test@email.com')
  	orders = Order.where(email: 'test@email.com')
  	@product_orders = []
  	@product_total = 0.00
  	orders.each do |order| 
  		current_order = Product.where(title: order.product_id).to_a
  		@product_orders = @product_orders + current_order
  		@product_total = @product_total + current_order[0].price.to_f
  	end
  end
end
