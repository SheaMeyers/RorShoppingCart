json.array!(@products) do |product|
  json.extract! product, :id, :product_id, :picture, :title, :price, :producer
  json.url product_url(product, format: :json)
end
