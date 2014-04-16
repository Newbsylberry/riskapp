json.(@project, :id, :name, :description, :portfolio_id, :total_exposure,
                :short_term_exposure, :mid_term_exposure, :long_term_exposure)

json.risks @project.risks do |json, risk|
    json.(risk, :id, :name, :description, :early_impact_date,
         :late_impact_date, :critical, :impact_rating,
         :schedule_impact, :probability, :exposure)
         end

