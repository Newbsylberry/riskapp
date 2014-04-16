json.(@portfolio, :id, :name, :description, :total_exposure, :short_term_exposure,
                    :mid_term_exposure, :long_term_exposure )

json.projects @portfolio.projects do |json, project|
    json.(project, :id, :name, :description, :total_exposure,
        :short_term_exposure, :mid_term_exposure, :long_term_exposure)
    end

json.risks @portfolio.risks do |json, risk|
    json.(risk, :id, :name, :description, :early_impact_date,
         :late_impact_date, :critical, :impact_rating,
         :schedule_impact, :probability, :exposure)
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

json.short_term_risks @short_term_risks do |json, short_term_risk|
    json.(short_term_risk, :id,
          :name, :description, :early_impact_date,
          :late_impact_date, :critical, :impact_rating,
          :schedule_impact, :probability, :exposure)
    end

json.mid_term_risks @mid_term_risks do |json, mid_term_risk|
    json.(mid_term_risk, :id,
          :name, :description, :early_impact_date,
          :late_impact_date, :critical, :impact_rating,
          :schedule_impact, :probability, :exposure)
    end

json.long_term_risks @long_term_risks do |json, long_term_risk|
    json.(long_term_risk, :id,
          :name, :description, :early_impact_date,
          :late_impact_date, :critical, :impact_rating,
          :schedule_impact, :probability, :exposure)
    end


