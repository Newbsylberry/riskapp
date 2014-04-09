json.array!(@risk_statuses) do |risk_status|
  json.extract! risk_status, :id, :name, :description
end