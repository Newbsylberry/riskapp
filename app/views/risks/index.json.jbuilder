json.array!(@risks) do |risk|
  json.extract! risk, :id, :name, :description
  json.url risk_path(risk, format: :json)
end
