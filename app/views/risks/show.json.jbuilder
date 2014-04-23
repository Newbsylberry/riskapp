json.(@risk, :id, :name, :description, :early_impact_date,
             :late_impact_date, :critical, :impact_rating,
             :schedule_impact, :probability, :owner)
             json.exposure @risk.exposure.to_i
             json.portfolio_id @risk.project.portfolio.id

json.related_risks @portfolio.risks do |json, risk|
    if risk != @risk
    json.(risk, :id, :name, :description, :early_impact_date,
         :late_impact_date, :critical, :impact_rating,
         :schedule_impact, :probability)
    json.exposure   risk.exposure.to_i
    json.project    risk.project.name
    end
    end