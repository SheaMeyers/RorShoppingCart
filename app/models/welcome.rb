class Welcome < ActiveRecord::Base
	has_many: products,
	has_many: users
end
