json.(@project, :id, :name, :description, :portfolio_id)

json.risks @project.risks do |json, risk|
    json.(risk, :id, :name, :description, :early_impact_date,
         :late_impact_date, :critical, :impact_rating,
         :schedule_impact, :probability)
         end

