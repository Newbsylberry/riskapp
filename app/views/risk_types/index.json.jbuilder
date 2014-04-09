json.array!(@risk_types) do |risk_type|
  json.extract! risk_type, :id, :name, :description
end