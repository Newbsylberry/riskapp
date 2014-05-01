json.array!(@risk_histories) do |risk_history|
  json.extract! risk_history, :id, :name, :description,
                              :impact_rating, :late_impact_date,
                              :probability, :early_impact_date,
                              :exposure, :risk_id, :critical,

end