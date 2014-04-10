class Risk < ActiveRecord::Base
  belongs_to :risk_type
  belongs_to :risk_strategy
  belongs_to :risk_control_category
  belongs_to :project

  def short_term_risk?
    risk = Risk.find_by_id(id)
    if risk.early_impact_date and
    risk.early_impact_date <= Time.now + (30*24*60*60)
      true
    else
      false
    end
  end

  def mid_term_risk?
    risk = Risk.find_by_id(id)
    if risk.early_impact_date and
      risk.early_impact_date >= Time.now + (30*24*60*60) and
      risk.early_impact_date <= Time.now + (60*24*60*60)
      true
    else
      false
    end
  end

  def long_term_risk?
    risk = Risk.find_by_id(id)
    if risk.early_impact_date and
    risk.early_impact_date >= Time.now + (60*24*60*60)
      true
    else
      false
    end
  end
end
