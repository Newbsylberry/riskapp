json.array!(@risk_control_categories) do |risk_control_category|
  json.extract! risk_control_category, :id, :name, :description
end