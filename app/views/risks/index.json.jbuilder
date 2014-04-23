json.array!(@risks) do |risk|
  json.extract! risk, :id, :name, :description,
                        :impact_rating, :late_impact_date,
                        :probability, :early_impact_date,
                        :exposure
  json.project risk.project.name
  json.risk_type risk.risk_type.name
  json.url risk_path(risk, format: :json)
end
