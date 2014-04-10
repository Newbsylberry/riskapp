json.(@portfolio, :id, :name, :description)

json.projects @portfolio.projects do |json, project|
    json.(project, :id, :name, :description)
    end

json.risks @portfolio.risks do |json, risk|
    json.(risk, :id, :name, :description, :early_impact_date,
         :late_impact_date, :critical, :impact_rating,
         :schedule_impact, :probability)
    end

json.risk_control_categories @portfolio.risk_control_categories do |json, risk_control_category|
    json.(risk_control_category, :id, :name, :description)
    end

json.risk_statuses @portfolio.risk_statuses do |json, risk_statuses|
    json.(risk_statuses, :id, :name, :description)
    end

json.events @portfolio.events do |json, event|
    json.(event, :id, :name, :description)
    end

json.risk_types @portfolio.risk_types do |json, risk_type|
    json.(risk_type, :id, :name, :description)
    end


