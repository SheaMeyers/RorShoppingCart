json.array!(@orders) do |order|
  json.extract! order, :id, :email, :productId, :orderId, :date, :quantity, :state
  json.url order_url(order, format: :json)
end
