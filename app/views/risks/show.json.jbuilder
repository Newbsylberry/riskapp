json.(@risk, :id, :name, :description, :early_impact_date,
             :late_impact_date, :critical, :impact_rating,
             :schedule_impact, :probability, :owner)
             json.exposure @risk.exposure.to_i
             json.portfolio_id @risk.project.portfolio.id

json.risk_historicals @risk.risk_histories do |json, risk_historical|
    json.(risk_historical, :id, :early_impact_date,
         :late_impact_date, :critical, :impact_rating,
         :probability, :exposure, :created_at)
    end