json.array!(@portfolios) do |portfolio|
  json.extract! portfolio, :id, :name, :description
  json.url portfolio_path(portfolio, format: :json)
end