json.array!(@orders) do |order|
  json.extract! order, :id, :order_id, :email, :product_id, :date, :quantity, :state
  json.url order_url(order, format: :json)
end
