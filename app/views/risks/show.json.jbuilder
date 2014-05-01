json.(@risk, :id, :name, :description, :early_impact_date,
             :late_impact_date, :critical, :impact_rating,
             :schedule_impact, :probability, :owner)
             json.exposure @risk.exposure.to_i
             json.project @risk.project.name
             json.portfolio_id @risk.project.portfolio.id

json.related_risks @related_risks.each do |r|
             json.(r, :id, :name, :description, :early_impact_date,
              :late_impact_date, :critical, :impact_rating,
              :schedule_impact, :probability, :owner, :exposure)
             end

json.risk_historicals @risk.risk_histories.sort_by { |obj| obj.created_at }.reverse do
                    |json, risk_historical|
    json.(risk_historical, :id, :early_impact_date,
         :late_impact_date, :critical, :impact_rating,
         :probability, :exposure, :created_at)
    end