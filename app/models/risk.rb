class Risk < ActiveRecord::Base
  belongs_to :risk_type
  belongs_to :risk_strategy
  belongs_to :risk_control_category
  belongs_to :project

  validates :name, presence: :true
  validates :probability, presence: :true
  validates :impact_rating, presence: :true

  def exposure
    probability * impact_rating
  end

  def short_term_risk?
    if early_impact_date and
    early_impact_date <= Time.now + (30*24*60*60)
      true
    else
      false
    end
  end

  def mid_term_risk?
    if early_impact_date and
      early_impact_date >= Time.now + (30*24*60*60) and
      early_impact_date <= Time.now + (60*24*60*60)
      true
    else
      false
    end
  end

  def long_term_risk?
    if early_impact_date and
    early_impact_date >= Time.now + (60*24*60*60)
      true
    else
      false
    end
  end
end
