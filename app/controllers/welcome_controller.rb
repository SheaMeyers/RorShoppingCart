class WelcomeController < ApplicationController
  def index
  	@products = Product.all
  	@users = User.where(email: 'test@email.com')
  end
end
