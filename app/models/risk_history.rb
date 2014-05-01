class RiskHistory < ActiveRecord::Base
  belongs_to :risk

  def exposure
    probability * impact_rating
  end
end
