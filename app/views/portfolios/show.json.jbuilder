json.(@portfolio, :id, :name, :description)

json.projects @portfolio.projects do |json, project|
    json.(project, :id, :name, :description)
    end

json.risks @portfolio.risks do |json, risk|
    json.(risk, :id, :name, :description, :early_impact_date,
         :late_impact_date, :critical, :impact_rating,
         :schedule_impact, :probability)
    end

