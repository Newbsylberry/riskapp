json.array!(@risks) do |risk|
  json.extract! risk, :id, :name, :description,
                        :impact_rating, :late_impact_date,
                        :probability, :early_impact_date
  json.url risk_path(risk, format: :json)
end
